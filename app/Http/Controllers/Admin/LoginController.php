<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index(Request $req)
    {

        Inertia::setRootView('login');
        return Inertia::render('Admin/Login');
    }

    public function login(Request $req)
    {
        $credentials = $req->only(['email', 'password']);
        $result = Auth::attempt($credentials);
        if ($result) {
            $req->session()->regenerate();
            return response()->json(['message' => 'Login success', 'redirectUrl' => url('admin/dashboard')]);
        } else {
            return response()->json(['message' => 'Login failed'], 401);
        }
    }
}
