<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function all(Request $request)
    {
        return response()->json(User::all());
    }

    public function store(Request $request, User $user)
    {
        $data = $request->only($user->getFillable());
        $result = $user->fill($data)->save();

        if ($result) {
            return response()->json($user->all());
        } else {
            return response()->json(['message' => 'Save Failed'], 400);
        }
    }

    public function show($id, Request $request)
    {
        $user = User::find($id);

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function update($id, Request $request)
    {
        $user = User::find($id);
        if ($user) {
            $data = $request->only($user->getFillable());
            $result = $user->fill($data)->save();

            if ($result) {
                return response()->json($user);
            } else {
                return response()->json(['message' => 'Update Failed'], 400);
            }
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }

    public function delete($id)
    {
        $user = User::find($id);
        if ($user->delete()) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'Delete Failed'], 400);
        }
    }
}
