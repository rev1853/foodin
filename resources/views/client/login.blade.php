<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>FoodIn</title>
    <link rel="apple-touch-icon" href="{{ url('materialize') }}/images/favicon/apple-touch-icon-152x152.png">
    <link rel="shortcut icon" type="image/x-icon" href="{{ url('materialize') }}/images/favicon/favicon-32x32.png">
    {{-- <link href="../../../../icon.css?family=Material+Icons" rel="stylesheet"> --}}
    <!-- BEGIN: VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/vendors/vendors.min.css">
    <!-- END: VENDOR CSS-->
    <!-- BEGIN: Page Level CSS-->
    <link rel="stylesheet" type="text/css"
        href="{{ url('materialize') }}/css/themes/vertical-dark-menu-template/materialize.min.css">
    <link rel="stylesheet" type="text/css"
        href="{{ url('materialize') }}/css/themes/vertical-dark-menu-template/style.min.css">
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/css/pages/login.css">
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/icon.css">
    <!-- END: Page Level CSS-->
    <link href="{{ url('') }}/zenix/vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">
    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/css/custom/custom.css">
    <!-- END: Custom CSS-->

    <!-- Scripts -->
    @routes
    <script src="{{ url('js/app.js') }}" defer></script>
    @inertiaHead
</head>
<!-- END: Head-->

<body
    class="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu preload-transitions 1-column login-bg   blank-page blank-page"
    data-open="click" data-menu="vertical-dark-menu" data-col="1-column">

    @inertia

    <!-- BEGIN VENDOR JS-->
    <script src="{{ url('materialize') }}/js/vendors.min.js"></script>
    <!-- BEGIN VENDOR JS-->
    <!-- BEGIN PAGE VENDOR JS-->
    <!-- END PAGE VENDOR JS-->
    <!-- BEGIN THEME  JS-->
    <script src="{{ url('materialize') }}/js/plugins.min.js"></script>
    <script src="{{ url('materialize') }}/js/search.min.js"></script>
    <script src="{{ url('materialize') }}/js/custom/custom-script.min.js"></script>
    <script src="{{ url('') }}/zenix/vendor/sweetalert2/dist/sweetalert2.min.js"></script>
    <!-- END THEME  JS-->
    <!-- BEGIN PAGE LEVEL JS-->
    <!-- END PAGE LEVEL JS-->
</body>

</html>
