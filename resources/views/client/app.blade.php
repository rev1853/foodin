<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description"
        content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google.">
    <meta name="keywords"
        content="materialize, admin template, dashboard template, flat admin template, responsive admin template, eCommerce dashboard, analytic dashboard">
    <meta name="author" content="ThemeSelect">
    <link rel="apple-touch-icon" href="{{ url('materialize') }}/images/favicon/apple-touch-icon-152x152.png">
    <link rel="shortcut icon" type="image/x-icon" href="{{ url('materialize') }}/images/favicon/favicon-32x32.png">
    <link href="{{ url('materialize') }}/icon.css?family=Material+Icons" rel="stylesheet">
    <!-- BEGIN: VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/vendors/vendors.min.css">
    <!-- END: VENDOR CSS-->
    <!-- BEGIN: Page Level CSS-->
    <link rel="stylesheet" type="text/css"
        href="{{ url('materialize') }}/css/themes/vertical-dark-menu-template/materialize.min.css">
    <link rel="stylesheet" type="text/css"
        href="{{ url('materialize') }}/css/themes/vertical-dark-menu-template/style.min.css">
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/css/pages/eCommerce-products-page.min.css">
    <!-- END: Page Level CSS-->
    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{ url('materialize') }}/css/custom/custom.css">
    <link href="{{ url('') }}/zenix/vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">

    <link rel="stylesheet" href="{{ url('css/app.css') }}">

    <!-- Scripts -->
    @routes
    <script src="{{ url('js/app.js') }}" defer></script>
    @inertiaHead
    <!-- END: Custom CSS-->
</head>
<!-- END: Head-->

<body
    class="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu preload-transitions 2-columns"
    data-open="click" data-menu="vertical-dark-menu" data-col="2-columns">
    @inertia


    <!-- END: Footer-->
    <!-- BEGIN VENDOR JS-->
    <script src="{{ url('materialize') }}/js/vendors.min.js"></script>
    <!-- BEGIN VENDOR JS-->
    <!-- BEGIN PAGE VENDOR JS-->
    <!-- END PAGE VENDOR JS-->
    <!-- BEGIN THEME  JS-->
    <script src="{{ url('materialize') }}/js/plugins.min.js"></script>
    <script src="{{ url('materialize') }}/js/custom/custom-script.min.js"></script>
    <!-- END THEME  JS-->
    <!-- BEGIN PAGE LEVEL JS-->
    <script src="{{ url('materialize') }}/js/scripts/advance-ui-modals.min.js"></script>
    <script src="{{ url('') }}/zenix/vendor/sweetalert2/dist/sweetalert2.min.js"></script>
    <script src="{{ url('materialize') }}/js/scripts/eCommerce-products-page.min.js"></script>

    <!-- END PAGE LEVEL JS-->
</body>

</html>
