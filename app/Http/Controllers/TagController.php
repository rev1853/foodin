<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{

    public function select()
    {
        $data = Tag::all();
        return response()->json($data);
    }

    public function all(Request $request)
    {
        $data = Tag::paginate(10);
        return response()->json($data);
    }

    public function store(Request $request, Tag $tag)
    {
        $data = $request->only($tag->getFillable());
        $result = $tag->fill($data)->save();

        if ($result) {
            return response()->json($tag->all());
        } else {
            return response()->json(['message' => 'Save Failed'], 400);
        }
    }

    public function show($id, Request $request)
    {
        $tag = Tag::find($id);

        if ($tag) {
            return response()->json($tag);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function update($id, Request $request)
    {
        $tag = Tag::find($id);
        if ($tag) {
            $data = $request->only($tag->getFillable());
            $result = $tag->fill($data)->save();

            if ($result) {
                return response()->json($tag);
            } else {
                return response()->json(['message' => 'Update Failed'], 400);
            }
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function delete($id)
    {
        $tag = Tag::find($id);
        if ($tag->delete()) {
            return response()->json($tag);
        } else {
            return response()->json(['message' => 'Delete Failed'], 400);
        }
    }
}
