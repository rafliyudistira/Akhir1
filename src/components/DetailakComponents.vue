<template>
<div>
    <div class="container p-2">
 <router-link class="btn btn-primary shadow"  type="button" to="/">Back</router-link>
 <router-link class="btn btn-success shadow"  type="button" to="/">Update Anggota</router-link>
  <div class="row justify-content-center my-3">
     <div class="col-6 p-4 rounded border gradient-custom-3 border-primary shadow"  >
        <form class="form">
          <h3 class="text-center mb-4">Detail Anggota Keluarga</h3>
        <div class="row">
            <div class="form-group col-md-6">
            <label for="StudentName">NIK</label>
            <input type="text" class="form-control" id="StudentName" placeholder="NIK">
            </div>
            <div class="form-group col-md-6">
            <label for="SoftSkill">Tanggal Lahir</label>
            <input type="date" class="form-control" id="softSkill" placeholder="Tanggal Lahir" >
            </div>
        </div>
        <div class="row mt-3">
            <div class="cs form-group col-md-3">
            <label for="StudentAge">Nama Lengkap</label>
            <input type="text" class="form-control" id="StudentAge" placeholder="Nama Lengkap" >
            </div>
           
            <div class="form-group col-md-6">
            <label for="hardSkill">Agama</label>
            <input type="text" class="form-control" id="hardSkill" placeholder="Agama" >
            </div>
        </div>
    <div class="row mt-3">
        <div class="form-group col-md-6">
            <label for="studentEmail">Jenis Kelamin</label>
           <select id="gender" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
            </select>
              <div class="row mt-3">
        <div class="cs form-group col-md-6">
            <label for="selfDescription">Tempat Lahir</label>  
        <input type="text" class="form-control" id="tl" placeholder="Tempat Lahir" >
        </div>
    </div>
        </div>
        <div class="form-group col-md-6">
            <label for="interest">Pendidikan</label>
           <select id="gender" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA</option>
                <option>D3</option>
                <option>S1</option>
                <option>S2</option>
                <option>S3</option>
            </select>
        <div class="form-group col-md-6 mt-3">
            <label for="studentEmail">Kepala Keluarga</label>
            <input type="Email" class="form-control" style="width: 540px;" id="studentEmail" placeholder="Kepala Keluarga" >
        </div>
        </div>
        
    </div>
        </form>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name : "DetailakComponents",
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
.cs {
    width: 560px;
}
</style>