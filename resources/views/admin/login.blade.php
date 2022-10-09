<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ url('css/app.css') }}">

    <meta charSet="utf-8" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="robots" content="" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />
    <title>FoodIn - Admin</title>
    <link href="{{ url('') }}/zenix/css/style.css" rel="stylesheet">
    <link href="{{ url('') }}/zenix/vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">
    <!-- Scripts -->
    @routes
    <script src="{{ url('js/app.js') }}" defer></script>
    @inertiaHead
</head>

<body class="vh-100 font-sans antialiased">
    @inertia

    <script src="{{ url('') }}/zenix/vendor/global/global.min.js"></script>
    <script src="{{ url('') }}/zenix/vendor/sweetalert2/dist/sweetalert2.min.js"></script>
    <script src="{{ url('') }}/zenix/js/deznav-init.js"></script>
    <script src="{{ url('') }}/zenix/js/demo.js"></script>
</body>

</html>
