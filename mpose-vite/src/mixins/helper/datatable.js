// import $ from 'jquery';
// import 'datatables.net';
// export default {
// mounted() {
//     $(document).ready(function () {
//         $('#example').DataTable();
//         $('#example2').DataTable();
//         $('#example3').DataTable();
//         $('#example4').DataTable();
//         $('#example5').DataTable();
//         $('#example6').DataTable();
//     });
//     },
//   };
import $ from 'jquery';
import 'datatables.net';
export default{
    mounted() {
        this.initializeDataTable('table1');
        this.initializeDataTable('table2');
        this.initializeDataTable('table3');
        this.initializeDataTable('table4');
        this.initializeDataTable('table5');
        this.initializeDataTable('table6');
        this.initializeDataTable('table7');
        this.initializeDataTable('table8');
        this.initializeDataTable('table9');
        this.initializeDataTable('table10');
        this.initializeDataTable('table11');
        this.initializeDataTable('table12');
        this.initializeDataTable('table13');
        this.initializeDataTable('table14');
        this.initializeDataTable('table15');
      },
      methods: {
        initializeDataTable(tableId) {
          $(this.$refs[tableId]).DataTable({
            searching: true,
            paging: true,
          });
        },
}
}