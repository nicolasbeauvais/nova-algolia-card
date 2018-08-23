<?php

namespace NicolasBeauvais\NovaAlgoliaCard;

use AlgoliaSearch\Client;

class Algolia
{
    public function __construct()
    {
        $this->client = new Client(config('scout.algolia.id'), config('scout.algolia.secret'));
    }

    public function getEntries(string $index = null) : ?int
    {
        return $index
            ? $this->getEntriesOfIndex($index)
            : $this->getAllEntries();
    }

    public function getAllEntries() : ?int
    {
        $indexes = $this->client->listIndexes();

        if (!isset($indexes['items'])) {
            return null;
        }

        return collect($indexes['items'])->sum('entries');
    }

    public function getEntriesOfIndex(string $index) : ?int
    {
        $indexes = $this->client->listIndexes();

        if (!isset($indexes['items'])) {
            return null;
        }

        return collect($indexes['items'])->where('name', $index)->sum('entries');
    }
}
