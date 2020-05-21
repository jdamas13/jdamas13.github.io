FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'doughnut2d',
    renderAt: 'chart-publications',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "defaultCenterLabel": "21",

            "captionOnTop":"1",
            "valuePosition": "inside",
            "showPercentValues": "0",
            "showValues": "1",
            "startingAngle": "310",
            "showLegend": "0",
            "centerLabel": "$value",
            "centerLabelBold": "1",
            "centerLabelFontSize": "25",
            "centerLabelColor": "#c2172d",
            "showTooltip": "0",
            "decimals": "0",
            "theme": "fusion",
            "chartLeftMargin": "0",
            "chartRightMargin": "0",
            "chartTopMargin": "0",
            "chartBottomMargin": "0",
            "labelFontBold": "1",
            "labelFontSize": "20",
            "captionPadding": "0",
            "pieRadius": 100,
            "doughnutRadius": "40"
        },
        "data": [{
            "label": "First\nauthor\npapers",
            "value": "6",
            "color": "#c2172d"
        }, {
            "label": "Collaborative\npapers",
            "value": "10",
            "color": "#9a9a9a"
        }, {
            "label": "Conference\nproceedings",
            "value": "3",
            "color": "#b5b5b5"
        }, {
            "label": "Book\nchapters",
            "value": "2",
            "color": "#d1d1d1"
        }]
    }
}
);
chartObj.render();
});

FusionCharts.ready(function(){
            var chartObj = new FusionCharts({
    type: 'doughnut2d',
    renderAt: 'chart-presentations',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "defaultCenterLabel": "8",

            "captionOnTop":"1",
            "valuePosition": "inside",
            "showPercentValues": "0",
            "showValues": "1",
            "startingAngle": "310",
            "showLegend": "0",
            "centerLabel": "$value",
            "centerLabelBold": "1",
            "centerLabelFontSize": "25",
            "centerLabelColor": "#c2172d",
            "showTooltip": "0",
            "decimals": "0",
            "theme": "fusion",
            "chartLeftMargin": "0",
            "chartRightMargin": "0",
            "chartTopMargin": "0",
            "chartBottomMargin": "0",
            "labelFontBold": "1",
            "labelFontSize": "20",
            "captionPadding": "0",
            "pieRadius": 100,
            "doughnutRadius": "40"
        },
        "data": [{
            "label": "Oral",
            "value": "6",
            "color": "#c2172d"
        }, {
            "label": "Poster",
            "value": "2",
            "color": "#d1d1d1"
        }]
    }
}
);
chartObj.render();
});
