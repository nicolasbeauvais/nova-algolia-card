<?php

namespace NicolasBeauvais\NovaAlgoliaCard;

use Laravel\Nova\Card;
use Laravel\Scout\Searchable;

class NovaAlgoliaCard extends Card
{
    public function __construct(string $index = null)
    {
        $this->withMeta(compact('index'));
    }

    public $width = '1/3';

    public function component()
    {
        return 'nova-algolia-card';
    }
}
