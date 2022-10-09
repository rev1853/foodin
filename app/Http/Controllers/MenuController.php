<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Menu;
use App\Models\MenuTag;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{

    public function all(Request $request, Menu $menu)
    {
        $query = $menu->newQuery();
        if ($request->has('rating')) {
            $rating = json_decode($request->rating);
            if (count($rating) > 0) {
                $query = $query->whereIn(DB::raw('FLOOR(ratingsum/ratingcount)'), $rating);
            }
        }

        if ($request->has('idcategory')) {
            $idcategory = json_decode($request->idcategory);
            if (count($idcategory) > 0) {
                $query = $query->whereIn('idcategory', $idcategory);
            }
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query = $query->where('name', 'like', "%$search%");
            $query = $query->whereHas('tags', function ($query) use ($search) {
                $query->whereHas('tag', function ($query) use ($search) {
                    $query->where('name', 'like', "%$search%");
                });
            });
        }

        $data = $query->paginate(10);
        return response()->json($data);
    }

    public function store(Request $request, Menu $menu)
    {
        $data = $request->only($menu->getFillable());
        $result = $menu->fill($data)->save();
        if ($result) {
            if ($request->has('tags')) $menu->tags()->createMany($request->tags);

            return response()->json($menu->all());
        } else {
            return response()->json(['message' => 'Save Failed'], 400);
        }
    }

    public function show($id, Request $request)
    {
        $menu = Menu::with([
            'tags' => function ($query) {
                return $query->with('tag');
            },
            'category',
            'comments' => function ($query) {
                $query->with('user');
            },
        ])->find($id);

        if ($menu) {
            return response()->json($menu);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function update($id, Request $request)
    {
        $menu = Menu::find($id);
        if ($menu) {
            $data = $request->only($menu->getFillable());
            $result = $menu->fill($data)->save();

            if ($result) {
                MenuTag::where('idmenu', $id)->delete();
                if ($request->has('tags')) $menu->tags()->createMany($request->tags);

                return response()->json($menu);
            } else {
                return response()->json(['message' => 'Update Failed'], 400);
            }
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function delete($id)
    {
        $menu = Menu::find($id);
        if ($menu->delete()) {
            MenuTag::where('idmenu', $id)->delete();
            return response()->json($menu);
        } else {
            return response()->json(['message' => 'Delete Failed'], 400);
        }
    }

    public function rate($id, Request $req, Comment $comment)
    {
        $menu = Menu::find($id);

        $commentData = $req->only($comment->getFillable());
        $result = $comment->fill($commentData)->save();
        if ($result) {
            $menu->ratingsum = intval($menu->ratingsum) + intval($req->ratingsum);
            $menu->ratingcount = intval($menu->ratingcount) + intval($req->ratingcount);
            $menu->save();
            return response()->json($menu);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }
}
