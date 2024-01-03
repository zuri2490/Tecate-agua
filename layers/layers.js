var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_coloniastecate_1 = new ol.format.GeoJSON();
var features_coloniastecate_1 = format_coloniastecate_1.readFeatures(json_coloniastecate_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coloniastecate_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coloniastecate_1.addFeatures(features_coloniastecate_1);
var lyr_coloniastecate_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coloniastecate_1, 
                style: style_coloniastecate_1,
                interactive: true,
                title: '<img src="styles/legend/coloniastecate_1.png" /> coloniastecate'
            });
var format_limitemunicipaltecate_2 = new ol.format.GeoJSON();
var features_limitemunicipaltecate_2 = format_limitemunicipaltecate_2.readFeatures(json_limitemunicipaltecate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitemunicipaltecate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitemunicipaltecate_2.addFeatures(features_limitemunicipaltecate_2);
var lyr_limitemunicipaltecate_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limitemunicipaltecate_2, 
                style: style_limitemunicipaltecate_2,
                interactive: true,
                title: '<img src="styles/legend/limitemunicipaltecate_2.png" /> limitemunicipaltecate'
            });
var format_Padroncatastral__3 = new ol.format.GeoJSON();
var features_Padroncatastral__3 = format_Padroncatastral__3.readFeatures(json_Padroncatastral__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padroncatastral__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padroncatastral__3.addFeatures(features_Padroncatastral__3);
var lyr_Padroncatastral__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Padroncatastral__3, 
                style: style_Padroncatastral__3,
                interactive: true,
                title: '<img src="styles/legend/Padroncatastral__3.png" /> Padron catastral_'
            });
var format_Infraestructurasanitaria_4 = new ol.format.GeoJSON();
var features_Infraestructurasanitaria_4 = format_Infraestructurasanitaria_4.readFeatures(json_Infraestructurasanitaria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructurasanitaria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructurasanitaria_4.addFeatures(features_Infraestructurasanitaria_4);
var lyr_Infraestructurasanitaria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infraestructurasanitaria_4, 
                style: style_Infraestructurasanitaria_4,
                interactive: true,
                title: '<img src="styles/legend/Infraestructurasanitaria_4.png" /> Infraestructura sanitaria'
            });
var format_Infraestructurahidraulica_5 = new ol.format.GeoJSON();
var features_Infraestructurahidraulica_5 = format_Infraestructurahidraulica_5.readFeatures(json_Infraestructurahidraulica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructurahidraulica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructurahidraulica_5.addFeatures(features_Infraestructurahidraulica_5);
var lyr_Infraestructurahidraulica_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infraestructurahidraulica_5, 
                style: style_Infraestructurahidraulica_5,
                interactive: true,
                title: '<img src="styles/legend/Infraestructurahidraulica_5.png" /> Infraestructura hidraulica'
            });
var format_PredialAgua_6 = new ol.format.GeoJSON();
var features_PredialAgua_6 = format_PredialAgua_6.readFeatures(json_PredialAgua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PredialAgua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PredialAgua_6.addFeatures(features_PredialAgua_6);
var lyr_PredialAgua_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PredialAgua_6, 
                style: style_PredialAgua_6,
                interactive: true,
    title: 'Predial Agua<br />\
    <img src="styles/legend/PredialAgua_6_0.png" /> Corriente<br />\
    <img src="styles/legend/PredialAgua_6_1.png" /> De 1 a 1 mil<br />\
    <img src="styles/legend/PredialAgua_6_2.png" /> De 1 a 5 mil<br />\
    <img src="styles/legend/PredialAgua_6_3.png" /> De 10 a 25 mil<br />\
    <img src="styles/legend/PredialAgua_6_4.png" /> De 100 a 500 mil<br />\
    <img src="styles/legend/PredialAgua_6_5.png" /> De 25 a 50 mil<br />\
    <img src="styles/legend/PredialAgua_6_6.png" /> De 5 a 10 mil<br />\
    <img src="styles/legend/PredialAgua_6_7.png" /> De 50 a 100 mil<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_coloniastecate_1.setVisible(true);lyr_limitemunicipaltecate_2.setVisible(true);lyr_Padroncatastral__3.setVisible(true);lyr_Infraestructurasanitaria_4.setVisible(true);lyr_Infraestructurahidraulica_5.setVisible(true);lyr_PredialAgua_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_coloniastecate_1,lyr_limitemunicipaltecate_2,lyr_Padroncatastral__3,lyr_Infraestructurasanitaria_4,lyr_Infraestructurahidraulica_5,lyr_PredialAgua_6];
lyr_coloniastecate_1.set('fieldAliases', {'qc_id': 'qc_id', 'gid': 'gid', 'nom_col': 'nom_col', 'tipodecolo': 'tipodecolo', 'cp': 'cp', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_limitemunicipaltecate_2.set('fieldAliases', {'qc_id': 'qc_id', 'nom_mun': 'nom_mun', 'cvemun': 'cvemun', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Padroncatastral__3.set('fieldAliases', {'qc_id': 'qc_id', 'clavecatas': 'clavecatas', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Infraestructurasanitaria_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'longitud': 'longitud', 'diametro': 'diametro', });
lyr_Infraestructurahidraulica_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'longitud': 'longitud', 'diametro': 'diametro', });
lyr_PredialAgua_6.set('fieldAliases', {'qc_id': 'qc_id', 'cuenta': 'cuenta', 'propietari': 'Propietario', 'deuda_actu': 'deuda_actu', 'rango': 'rango', 'cuenta_1': 'cuenta_1', 'propieta_1': 'propieta_1', 'deuda_ac_1': 'deuda_ac_1', 'rango_1': 'rango_1', });
lyr_coloniastecate_1.set('fieldImages', {'qc_id': '', 'gid': 'TextEdit', 'nom_col': 'TextEdit', 'tipodecolo': 'TextEdit', 'cp': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_limitemunicipaltecate_2.set('fieldImages', {'qc_id': '', 'nom_mun': '', 'cvemun': '', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Padroncatastral__3.set('fieldImages', {'qc_id': '', 'clavecatas': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Infraestructurasanitaria_4.set('fieldImages', {'qc_id': '', 'id': '', 'longitud': '', 'diametro': '', });
lyr_Infraestructurahidraulica_5.set('fieldImages', {'qc_id': '', 'id': '', 'longitud': '', 'diametro': '', });
lyr_PredialAgua_6.set('fieldImages', {'qc_id': '', 'cuenta': 'TextEdit', 'propietari': 'TextEdit', 'deuda_actu': '', 'rango': 'TextEdit', 'cuenta_1': 'Hidden', 'propieta_1': 'Hidden', 'deuda_ac_1': '', 'rango_1': 'Hidden', });
lyr_coloniastecate_1.set('fieldLabels', {'qc_id': 'no label', 'gid': 'no label', 'nom_col': 'no label', 'tipodecolo': 'no label', 'cp': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_limitemunicipaltecate_2.set('fieldLabels', {'qc_id': 'no label', 'nom_mun': 'no label', 'cvemun': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Padroncatastral__3.set('fieldLabels', {'qc_id': 'no label', 'clavecatas': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Infraestructurasanitaria_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'longitud': 'no label', 'diametro': 'no label', });
lyr_Infraestructurahidraulica_5.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'longitud': 'no label', 'diametro': 'no label', });
lyr_PredialAgua_6.set('fieldLabels', {'qc_id': 'no label', 'cuenta': 'inline label', 'propietari': 'inline label', 'deuda_actu': 'no label', 'rango': 'inline label', 'deuda_ac_1': 'no label', });
lyr_PredialAgua_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});