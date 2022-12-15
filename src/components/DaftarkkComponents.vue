<template>
    <div>
        <body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

          
               

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    

                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">Daftar Anggota Keluarga</h1>
                    <div class="mb-4 mt-4">
                        <router-link class="btn btn-primary "  type="button" to="/">Back</router-link>
                        <router-link class="btn btn-info "  type="button" to="/">Tambah Anggota Keluarga</router-link>
                    </div>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Tabel</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nomor KK</th>
                                            <th>Alamat</th>
                                            <th>Kota</th>
                                            <th>Kode Pos</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                        
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>360117850000002</td>
                                            <td>Jatiuwung</td>
                                            <td>Tangerang</td>
                                            <td>42254</td>
                                            <td></td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

           


        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

</body>
    </div>
</template>

<script>
export default {
    name : "DaftarkkComponents"
}
</script>

<style>

</style>