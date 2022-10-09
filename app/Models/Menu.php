<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $primaryKey = 'idmenu';
    public $timestamps = false;

    protected $attributes = [
        'ratingcount' => 0,
        'ratingsum' => 0,
    ];

    protected $fillable = [
        'idcategory',
        'name',
        'description',
        'price',
        'ratingcount',
        'ratingsum',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'idcategory', 'idcategory');
    }

    public function tags()
    {
        return $this->hasMany(MenuTag::class, 'idmenu', 'idmenu');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'idmenu', 'idmenu');
    }
}
