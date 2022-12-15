<template>
<div>
    <div class="container p-2">
 <router-link class="btn btn-primary "  type="button" to="/">Back</router-link>
 <router-link class="btn btn-info "  type="button" to="/">Lihat Anggota Keluarga</router-link>
  <div class="row justify-content-center my-3">
     <div class="col-6 p-4 rounded border gradient-custom-3 border-primary shadow"  >
        <form class="form">
          <h3 class="text-center mb-4">Tambah Kartu Keluarga</h3>
        <div class="row">
            <div class="form-group col-md-6">
            <label for="StudentName">Nomor Kartu Keluarga</label>
            <input type="text" class="form-control" id="StudentName" placeholder="Nomor Kartu Keluarga">
            </div>
            <div class="form-group col-md-6">
            <label for="SoftSkill">Desa/Kelurahan</label>
            <input type="text" class="form-control" id="softSkill" placeholder="Desa/Kelurahan" >
            </div>
        </div>
        <div class="row mt-3">
            <div class="form-group col-md-3">
            <label for="StudentAge">RT</label>
            <input type="number" class="form-control" id="StudentAge" placeholder="RT" >
            </div>
            <div class="form-group col-md-3">
            <label for="gender">RW</label>
            <input type="number" class="form-control" id="StudentAge" placeholder="RW" >
            </div>
            <div class="form-group col-md-6">
            <label for="hardSkill">Kecamatan</label>
            <input type="text" class="form-control" id="hardSkill" placeholder="Kecamatan" >
            </div>
        </div>
    <div class="row mt-3">
        <div class="form-group col-md-6">
            <label for="studentEmail">Kode Pos</label>
            <input type="Email" class="form-control" id="studentEmail" placeholder="Kode Pos" >
              <div class="row mt-3">
        <div class="form-group col-md-6">
            <label for="selfDescription">Alamat</label>  
        <textarea name="text" id="selfDescription" cols="64vh" rows="4" placeholder="Alamat"></textarea>
        </div>
    </div>
        </div>
        <div class="form-group col-md-6">
            <label for="interest">Kabupaten</label>
            <input type="Email" class="form-control" id="studentEmail" placeholder="Kabupaten" >
        <div class="form-group col-md-6 mt-3">
            <label for="studentEmail">Provinsi</label>
            <input type="Email" class="form-control" style="width: 540px;" id="studentEmail" placeholder="Provinsi" >
        </div>
        </div>
        
    </div>
    <div class="btn1">
        <button type="submit" class="btn btn-danger mt-3">Cancel</button>
        <button type="submit" class="btn btn-success mt-3">Update</button>
    </div>
        </form>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name : "DetailkkComponents",
}
</script>

<style>
/*
    DEMO STYLE
*/
   .gradient-custom-3 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.col-6 {
    width: 145vh;
    margin-left: 20px;
}
.btn {
    margin-left: 20px;
}
.btn1 {
    margin-left: 0;
}
</style>