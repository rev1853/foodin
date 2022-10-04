<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $primaryKey = 'iduser';
    public $timestamps = false;

    protected $fillable = [
        'nickname',
        'email',
        'password',
        'commonname',
    ];

    protected static function newFactory()
    {
        return UserFactory::new();
    }
}
