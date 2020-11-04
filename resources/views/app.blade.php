<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="crsf-token" content="{{ csrf_token() }}">
        <meta name="author" content="Lee Niat">
        <meta name='keywords' content="restaurant, menu, burgur, pizza, food, kitchen" />

        <title>Restaurant</title>

        <!-- Fonts -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

        <!-- Styles -->
    </head>
    <body class="antialiased overflow-x-hidden relative">
        @inertia
    </body>
    <script src="{{ mix('/js/app.js') }}"></script>
</html>
