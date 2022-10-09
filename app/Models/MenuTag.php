<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuTag extends Model
{
    use HasFactory;

    protected $primaryKey = null;
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'idtag',
        'idmenu',
    ];

    public function tag()
    {
        return $this->belongsTo(Tag::class, 'idtag', 'idtag');
    }
}
