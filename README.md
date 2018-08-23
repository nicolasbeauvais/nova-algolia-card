# Nova Algolia Cards

[![Latest Version on Packagist](https://img.shields.io/packagist/v/nicolasbeauvais/nova-algolia-card.svg?style=flat-square)](https://packagist.org/packages/nicolasbeauvais/nova-algolia-card)
[![Total Downloads](https://img.shields.io/packagist/dt/nicolasbeauvais/nova-algolia-card.svg?style=flat-square)](https://packagist.org/packages/nicolasbeauvais/nova-algolia-card)

Get some insight on your Algolia indexing with this easy to use Nova card.

![nova-algolia-card](https://user-images.githubusercontent.com/2951704/44540973-dfbbbd80-a708-11e8-8387-057aa40fcbf0.png)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require nicolasbeauvais/nova-algolia-card
```

Next up, you must register the card Nova. This is typically done in the `tools` method of the `NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvider.php

// ...

public function cards()
{
    return [
        // ...
        new \NicolasBeauvais\NovaAlgoliaCard\NovaAlgoliaCard,
    ];
}
```

## Config

If you are already using [Laravel Scout](https://laravel.com/docs/5.6/scout)
everything is already configured.

If not, you must create a `config/scout.php` file with the following content:

```php
<?php

return [
    'algolia' => [
        'id' => env('ALGOLIA_APP_ID', ''),
        'secret' => env('ALGOLIA_SECRET', ''),
    ],
];
```
    
## Usage

By default the card will show the total number of records across all your
Algolia indexes. You can specify an index name to the card to show it's number
of records:

```php
// in app/Nova/User.php

// ...

public function cards()
{
    return [
        new \NicolasBeauvais\NovaAlgoliaCard\NovaAlgoliaCard((new \App\User)->searchableAs()),
        // or
        new \NicolasBeauvais\NovaAlgoliaCard\NovaAlgoliaCard('my_user_index'),
    ];
}
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email nicolasbeauvais1@gmail.com instead of using the issue tracker.

## Credits

- [Nicolas Beauvais](https://github.com/nicolasbeauvais)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
