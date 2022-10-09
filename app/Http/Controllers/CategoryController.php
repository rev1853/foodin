<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function select()
    {
        $data = Category::all();
        return response()->json($data);
    }

    public function all(Request $request)
    {
        $data = Category::paginate(10);
        return response()->json($data);
    }

    public function store(Request $request, Category $category)
    {
        $data = $request->only($category->getFillable());
        $result = $category->fill($data)->save();

        if ($result) {
            return response()->json($category->all());
        } else {
            return response()->json(['message' => 'Save Failed'], 400);
        }
    }

    public function show($id, Request $request)
    {
        $category = Category::find($id);

        if ($category) {
            return response()->json($category);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function update($id, Request $request)
    {
        $category = Category::find($id);
        if ($category) {
            $data = $request->only($category->getFillable());
            $result = $category->fill($data)->save();

            if ($result) {
                return response()->json($category);
            } else {
                return response()->json(['message' => 'Update Failed'], 400);
            }
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function delete($id)
    {
        $category = Category::find($id);
        if ($category->delete()) {
            return response()->json($category);
        } else {
            return response()->json(['message' => 'Delete Failed'], 400);
        }
    }
}
