google.charts.load ('current', { 'packages': ['line', 'controls', 'table','corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

//PARSINgoogle.charts.setOnLoadCallback(drawVisualization);

      var pib = [];
      var pibdate = [];
      var pibrea = [];
      var pibrealdat = [];
      var pibagr = [];
      var pibagridat = [];
      var pibin = [];
      var pibinddat = [];
      var pibser = [];
      var pibservdat = [];   

      var laboral = [];
      var laboraldate = [];

      var cnn = [];
      var cnndate = [];

      var ctelab = [];
      var ctelabdate = [];

function drawVisualization() 
{
    var date = [];
      var IPC = [];


           var cte_lab = $.ajax({
              url: "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30651?tip=AM&",
              dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              title: "Costes laborales",
              chartType: "Linechart",  
              async: false,
              success: function (data)
                  {  
                    // Loop through each data and populate the array.                  
                  if (data.length > 0) 
                        {
                      $.each(data[0].Data, function (index, value, array) 
                              {
                           ctelab.push([value.Valor])
                          })
                         };

                  if (data.length > 0) 
                        {
                      $.each(data[0].Data, function (index, value, array) 
                              {
                           ctelabdate.push([value.Fecha])
                          })
                         }
                  },
            error: function (XMLHttpRequest, textStatus, errorThrown)   
                {
                    alert('Got an Error');
                },
            });

           var cnnegocios = $.ajax({
              url: "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/27142?tip=AM&",
              dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              title: "Mercado laboral",
              chartType: "Linechart",  
              async: false,
              success: function (data)
                  {  
                    // Loop through each data and populate the array.                  
                  if (data.length > 0) 
                        {
                      $.each(data[0].Data, function (index, value, array) 
                              {
                           cnn.push([value.Valor])
                          })
                         };

                  if (data.length > 0) 
                        {
                      $.each(data[0].Data, function (index, value, array) 
                              {
                           cnndate.push([value.Fecha])
                          })
                         }
                  },
            error: function (XMLHttpRequest, textStatus, errorThrown)   
                {
                    alert('Got an Error');
                },
            });

           var paro = $.ajax({
              url: "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/3996?tip=AM&",
              dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              title: "Mercado laboral",
              chartType: "Linechart",  
              async: false,
              success: function (data)
                  {  
                    // Loop through each data and populate the array.                  
                  if (data.length > 0) 
                        {
                      $.each(data[159].Data, function (index, value, array) 
                              {
                           laboral.push([value.Valor])
                          })
                         };

                  if (data.length > 0) 
                        {
                      $.each(data[159].Data, function (index, value, array) 
                              {
                           laboraldate.push([value.Fecha])
                          })
                         }
                  },
            error: function (XMLHttpRequest, textStatus, errorThrown)   
                {
                    alert('Got an Error');
                },
            });

            var par = $.ajax({
              url: "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/22344?tip=AM&",
              dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              title: "IPC",
              chartType: "Linechart",  
              async: false,
              success: function (data) 
                  {  
                    // Loop through each data and populate the array.                  
                  if (data.length > 0) 
                        {
                      $.each(data[0].Data, function (index, value, array) 
                              {
                           IPC.push([value.Valor])
                          })
                         };

                  if (data.length > 0) 
                        {
                      $.each(data[0].Data, function (index, value, array) 
                              {
                           date.push([value.Fecha])
                          })
                         }
                  },
            error: function (XMLHttpRequest, textStatus, errorThrown)   
                {
                    alert('Got an Error');
                },
            });

            var parseo = $.ajax({
              url: "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&",
              dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              title: "PIB",
              chartType: "Linechart",  
              async: false,
              success: function (datapib) 
                  {  
                    // Loop through each data and populate the array.                  
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[0].Data, function (index, value, array) 
                              {
                           pib.push([value.Valor])
                          })
                         };

                  if (datapib.length > 0) 
                        {
                      $.each(datapib[0].Data, function (index, value, array) 
                              {
                           pibdate.push([value.Fecha])
                          })
                         };

                  if (datapib.length > 0) 
                        {
                      $.each(datapib[48].Data, function (index, value, array) 
                              {
                           pibrea.push([value.Valor])
                          })
                         };   
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[48].Data, function (index, value, array) 
                              {
                           pibrealdat.push([value.Fecha])
                          })
                         }   
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[3].Data, function (index, value, array) 
                              {
                           pibagr.push([value.Valor])
                          })
                         };   
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[3].Data, function (index, value, array) 
                              {
                           pibagridat.push([value.Fecha])
                          })
                         }                                
                  
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[6].Data, function (index, value, array) 
                              {
                           pibin.push([value.Valor])
                          })
                         }                                                  
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[6].Data, function (index, value, array) 
                              {
                           pibinddat.push([value.Fecha])
                          })
                         }  
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[15].Data, function (index, value, array) 
                              {
                           pibser.push([value.Valor])
                          })
                         }                                                  
                  if (datapib.length > 0) 
                        {
                      $.each(datapib[15].Data, function (index, value, array) 
                              {
                           pibservdat.push([value.Fecha])
                          })
                         }                                                         
                  },                  

            error: function (XMLHttpRequest, textStatus, errorThrown)   
                {
                    alert('Got an Error');
                },
            });

//

  var tabledata1 = new google.visualization.DataTable();

      tabledata1.addColumn('date','IPCdate');  
      tabledata1.addColumn('number','IPC');
      tabledata1.addColumn('number','rows');

  for (i in IPC){
    var IPCnum = parseFloat(IPC[i]);         
    var IPCdate = new Date(date[i]);    
    var j = i++;
                
    tabledata1.addRow([IPCdate, IPCnum, j]);
    }

  var tabledata = new google.visualization.DataTable();
      tabledata.addColumn('date','PIBdater');    
      tabledata.addColumn('number','PIB');      
      tabledata.addColumn('date','PIBrealdated');      
      tabledata.addColumn('number','PIB Real');
      tabledata.addColumn('date','PIBagridated');      
      tabledata.addColumn('number','PIB S1');  
      tabledata.addColumn('date','Date');      
      tabledata.addColumn('number','PIB S2'); 
      tabledata.addColumn('date','Date');      
      tabledata.addColumn('number','PIB S3');   
      tabledata.addColumn('date','lab Date');           
      tabledata.addColumn('number','Paro');               
      tabledata.addColumn('date','cnn Date');       
      tabledata.addColumn('number','Cifra Neta de Negocios');
      tabledata.addColumn('date','Fecha Costes laborales');          
      tabledata.addColumn('number','Costes laborales');           
      tabledata.addColumn('number','rows');               
 
    for (i in pib){
      var date_pib_parsed     = pibdate.flatMap(x => [x, x, x]);
      var nume_pib_parsed     = pib.flatMap(x => [x, x, x]);
      var date_pibreal_parsed = pibrealdat.flatMap(x => [x, x, x]);
      var nume_pibreal_parsed = pibrea.flatMap(x => [x, x, x]);
      var date_pibagri_parsed = pibagridat.flatMap(x => [x, x, x]);
      var nume_pibagri_parsed = pibagr.flatMap(x => [x, x, x]);
      var date_pibind_parsed  = pibinddat.flatMap(x => [x, x, x]);
      var nume_pibind_parsed  = pibin.flatMap(x => [x, x, x]);                  
      var date_pibser_parsed  = pibservdat.flatMap(x => [x, x, x]);
      var nume_pibser_parsed  = pibser.flatMap(x => [x, x, x]);
      var date_labor_parsed   = laboraldate.flatMap(x => [x, x, x]);      
      var nume_labor_parsed   = laboral.flatMap(x => [x, x, x]); 
      var date_ctelab_parsed   = ctelabdate.flatMap(x => [x, x, x]);       
      var nume_ctelab_parsed   = ctelab.flatMap(x => [x, x, x]);       
  
      var date_pib_format = new Date(date_pib_parsed[i]);
      var date_pibR_format = new Date(date_pibreal_parsed[i]);
      var date_PIBS1_format = new Date(date_pibagri_parsed[i]);     
      var date_PIBS2_format = new Date(date_pibind_parsed[i]);
      var date_PIBS3_format = new Date(date_pibser_parsed[i]);  
      var date_lab_format = new Date(date_labor_parsed[i]);          
      var cnndated = new Date(cnndate[i]);
      var date_ctelab_format = new Date(date_ctelab_parsed[i]);

      var PIBdater_01 = new Date(date_pib_format.getFullYear(i), date_pib_format.getMonth(i)+3, 0) 
      var PIBRdate_03 = new Date(date_pibR_format.getFullYear(i), date_pibR_format.getMonth(i)+3, 0)  
      var PIBS1date_05 = new Date(date_PIBS1_format.getFullYear(i), date_PIBS1_format.getMonth(i)+3, 0) 
      var PIBS2date_07 = new Date(date_PIBS2_format.getFullYear(i), date_PIBS2_format.getMonth(i)+3, 0)       
      var PIBS3date_09 = new Date(date_PIBS3_format.getFullYear(i), date_PIBS3_format.getMonth(i)+3, 0)
      var labdate_11 = new Date(date_PIBS3_format.getFullYear(i), date_PIBS3_format.getMonth(i)+3, 0)   
      var icnedate_13 = new Date(date_PIBS3_format.getFullYear(i), date_PIBS3_format.getMonth(i)+3, 0)
      var ctelabdate_15 = new Date(date_ctelab_format.getFullYear(i), date_ctelab_format.getMonth(i)+3, 0)                                       

      var PIB_02  = parseFloat(nume_pib_parsed[i]);         
      var PIBR_04  = parseFloat(nume_pibreal_parsed[i]);
      var PIBS1_06  = parseFloat(nume_pibagri_parsed[i]);        
      var PIBS2_08  = parseFloat(nume_pibind_parsed[i]);        
      var PIBS3_10  = parseFloat(nume_pibser_parsed[i]);
      var paro_12 = parseFloat(nume_labor_parsed[i]);   
      var icne_14  = parseFloat(cnn[i]);  
      var ctelab_16  = parseFloat(nume_ctelab_parsed[i]);            
      var j = i++;
      
      tabledata.addRow([PIBdater_01, PIB_02, PIBRdate_03, PIBR_04, PIBS1date_05, PIBS1_06, PIBS2date_07, PIBS2_08, PIBS3date_09, PIBS3_10, 
                        labdate_11, paro_12, icnedate_13, icne_14, ctelabdate_15, ctelab_16, j]);
      };
     
     var joinedtables = new google.visualization.data.join(tabledata, tabledata1, 'inner', [[16, 2]], [0,1,2,3,4,7,8,9,10,11,12,13,14,15], [0,1]);


// 0: IPCdate
// 1: IPCnum
// 2: PIBdater
// 3: PIBnum
// 4: PIBrealdated
// 5: PIBrealnum
// 6: PIBagridated
// 7: PIBagrinum
// 8: PIBinddated
// 9: PIBindnum
// 10: PIBservdated
// 11: PIBservnum
// 12: j

//DRAWING CHARTS

      var gencolor = 'black';
      var genfont = 'Palatino Linotype';
      var gensize = 16;
      var genbold = false;


      var pibcolor = '#1a237e';
      var ipccolor = '#d43785';
      var parocolor = '#a52714';
      var cnncolor = '#097138';  

//DATAVIEW
     var viewdata = new google.visualization.DataView(joinedtables);
     viewdata.setColumns([0,1,2,3]);
     viewdata.setRows([0,1,2,3,4,5]);     
//FORMATS
     var val_format = new google.visualization.NumberFormat(
           {suffix:'€',negativeColor: 'red', decimalSymbol: ',', groupingSymbol:'.', fractionDigits:'0'         
           });
     var val_var_format = new google.visualization.NumberFormat(
           {patern:'#,###%', suffix:'%', negativeColor: 'red', decimalSymbol: ',', groupingSymbol:'.', fractionDigits:'2'         
           });
     var arrow_formatter = new google.visualization.ArrowFormat();
     
     val_format.format(tabledata, 1);
     val_var_format.format(tabledata1, 1);
     arrow_formatter.format(tabledata, 3);          
//TABLE DATA 2
     var val1 = viewdata.getValue(1,0)
     var val2 = viewdata.getValue(2,0)     

     //Get last value     
     var last_val1 = viewdata.getValue(viewdata.getNumberOfRows()-1,0);

     var val_var = ((val1-val2)/val2)*100;



//DASHBOARDS


     var pib_01 = joinedtables.getValue(0,2)
     var pib_02 = joinedtables.getValue(3,2)     
     var pib_vrc = (pib_01 - pib_02)/pib_02*100
     var pib_36 = joinedtables.getValue(36,2)
     var pib_vrca = (pib_01 - pib_36)/pib_36*100

     var paro_01 = joinedtables.getValue(0,10)
     var paro_02 = joinedtables.getValue(3,10)     
     var paro_vrc = paro_01 - paro_02
     var paro_36 = joinedtables.getValue(36,10)
     var paro_vrca = paro_01 - paro_36          

     var icne_01 = joinedtables.getValue(0,12) 
     var icne_02 = joinedtables.getValue(1,12)     
     var icne_vrc = icne_01 - icne_02
     var icne_12 = joinedtables.getValue(12,12)
     var ince_vrca = icne_01 - icne_12   
    
     var ipc_01 = joinedtables.getValue(0,14)
     var ipc_02 = joinedtables.getValue(1,14)     
     var ipc_vrc = ipc_01 - ipc_02
     var ipc_12 = joinedtables.getValue(12,14)
     var ipc_vrca = ipc_01 - ipc_12     

     var pibr_01 = joinedtables.getValue(0,4) 
     var pibr_02 = joinedtables.getValue(3,4)     
     var pibr_vrc = pibr_01 - pibr_02
     var pibr_36 = joinedtables.getValue(36,4)
     var pibr_vrca = (pibr_01 - pibr_36)/pibr_36*100  

     var ctelab_01 = joinedtables.getValue(0,16) 
     var ctelab_02 = joinedtables.getValue(3,16)     
     var ctelab_vrc = ctelab_01 - ctelab_02
     var ctelab_36 = joinedtables.getValue(36,16)
     var ctelab_vrca = (ctelab_01 - ctelab_36)/ctelab_36*100              


     
     var data_indicadores = new google.visualization.DataTable();
     data_indicadores.addColumn('string', 'Indicador')     
     data_indicadores.addColumn('number','Variac. año anterior')    
     data_indicadores.addColumn('number', 'Variac. Últ. Periodo')
     data_indicadores.addColumn('number','Valor absoluto') 

     data_indicadores.addRows([
        ["PIB",               pib_vrca,     pib_vrc,     pib_01],
        ["Tasa de paro",      paro_vrca,    paro_vrc,    paro_01],
        ["ICNE",              ince_vrca,    icne_vrc,    icne_01],
        ["IPC",               ipc_vrca,     ipc_vrc,     ipc_01],
        ["PIB Real",          pibr_vrca,    pibr_vrc,    pibr_01],
        ["Costes Laborales",  ctelab_vrca,  ctelab_vrc,  ctelab_01],         
        ]);




     var col_format = new google.visualization.ColorFormat();
     col_format.addRange(null, 0, 'red', 'none');
     col_format.addRange(0, null, 'green', 'none');
     col_format.format(data_indicadores, 2)
     col_format.format(data_indicadores, 1)     

     var col_format1 = new google.visualization.ColorFormat();
     col_format1.addRange(null, 0, 'green', 'none');
     col_format1.addRange(0, null, 'red', 'none');
     col_format1.format(data_indicadores, 2)
     col_format1.format(data_indicadores, 1)    

     var viewdata1 = new google.visualization.DataView(data_indicadores);
     viewdata1.setColumns([0,1,2,3]);
     viewdata1.setRows([0,1,2,3,4,5]);

     var options = {allowHtml: true}








     var table2 = new google.visualization.Table(document.getElementById('table11'));
     table2.draw(viewdata1, options);      

     var table1 = new google.visualization.Table(document.getElementById('table12'));
     table1.draw(viewdata);

     var table3 = new google.visualization.Table(document.getElementById('table13'));
     table3.draw(joinedtables);                
};


