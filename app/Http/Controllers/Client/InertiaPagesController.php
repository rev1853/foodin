<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InertiaPagesController extends Controller
{
    public function dashboard()
    {
        Inertia::setRootView('client/app');
        return Inertia::render('Client/Dashboard');
    }

    public function detail($id)
    {
        Inertia::setRootView('client/app');
        return Inertia::render('Client/Detail', ['id' => $id]);
    }

    public function logout()
    {
        Auth::logout();
        return Inertia::location(url('login'));
    }
}
