<?php

namespace NicolasBeauvais\NovaAlgoliaCard\Http\Controllers;

use NicolasBeauvais\NovaAlgoliaCard\Algolia;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AlgoliaController extends Controller
{
    /**
     * @var \AlgoliaSearch\Client
     */
    protected $algolia;

    public function __construct(Algolia $algolia)
    {
        $this->algolia = $algolia;
    }

    public function index(Request $request)
    {
        $index = $request->route('index');
        $entries = $this->algolia->getEntries($index);

        return response()->json(compact('entries', 'index'));
    }
}
