<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index(Request $req)
    {
        // $user = User::where('nickname', 'arlie.daniel')->first();
        // $credentials = [
        //     'email' => 'doug19@stroman.com',
        //     'password' => 'arlie.danielakua',
        // ];
        // Auth::attempt($credentials);
        $req->session()->regenerate();

        Inertia::setRootView('login');
        return Inertia::render('Login');
    }

    public function login(Request $req)
    {
    }
}
