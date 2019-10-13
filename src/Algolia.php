<?php

namespace NicolasBeauvais\NovaAlgoliaCard;

use AlgoliaSearch\Client as AlgoliaClientV1;
use Algolia\AlgoliaSearch\SearchClient as AlgoliaClientV2;

class Algolia
{
    private $useClientV2 = true;

    public function __construct()
    {
        if (class_exists('AlgoliaSearch\Client')) {
            $this->client = new AlgoliaClientV1(config('scout.algolia.id'), config('scout.algolia.secret'));
            $this->useClientV2 = false;
        } else {
            $this->client = AlgoliaClientV2::create(config('scout.algolia.id'), config('scout.algolia.secret'));
        }
    }

    public function getEntries(string $index = null) : ?int
    {
        return $index
            ? $this->getEntriesOfIndex($index)
            : $this->getAllEntries();
    }

    public function getAllEntries() : ?int
    {
        $indexes = $this->listIndexes();

        if (!isset($indexes['items'])) {
            return null;
        }

        return collect($indexes['items'])->sum('entries');
    }

    public function getEntriesOfIndex(string $index) : ?int
    {
        $indexes = $this->listIndexes();

        if (!isset($indexes['items'])) {
            return null;
        }

        return collect($indexes['items'])->where('name', $index)->sum('entries');
    }

    private function listIndexes()
    {
        if ($this->useClientV2) {
            return $this->client->listIndices();
        } else {
            return $this->client->listIndexes();
        }
    }
}
