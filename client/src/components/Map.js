import React , { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const { kakao } = window;

const useStyles = makeStyles((theme) => ({
    mapdiv: {
        position:'relative',
        height: '100vh',
        width:'100%',
        zIndex: '1',
    },
    
    undo: {
        position: 'absolute',
        display: 'inline-block',
        bottom: 0,
        right: 0,
        zIndex: 4,
        '& button': {
            height: '50px',
            width:'50px',
        }
    },

    apply: {
        position: 'absolute',
        display: 'inline-block',
        bottom: 100,
        right: 0,
        zIndex: 4,
        '& button': {
            height: '50px',
            width:'50px',       
        }    
    },

}));

export default function Map() {
    
    useEffect(() => {
        const container = document.getElementById('myMap');
		const mapoptions = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        var map = new kakao.maps.Map(container, mapoptions), overlays = [];

var strokeColor = '#39f',
fillColor = '#cce6ff',
fillOpacity = 0.5,
hintStrokeStyle = 'dash';

var options = { 
map: map, 
drawingMode: [
    kakao.maps.Drawing.OverlayType.MARKER,
    kakao.maps.Drawing.OverlayType.POLYLINE,
    kakao.maps.Drawing.OverlayType.RECTANGLE,
    kakao.maps.Drawing.OverlayType.CIRCLE,
],

guideTooltip: ['draw', 'drag', 'edit'], 
markerOptions: {
    draggable: false,
    removable: false,
},

polylineOptions: {
    draggable: false,
    removable: false,
    strokeColor: strokeColor,
    hintStrokeStyle: hintStrokeStyle
},
rectangleOptions: {
    draggable: false,
    removable: false,
    strokeColor: strokeColor,
    fillColor: fillColor,
    fillOpacity: fillOpacity
},
circleOptions: {
    draggable: false,
    removable: false,
    strokeColor: strokeColor,
    fillColor: fillColor,
    fillOpacity: fillOpacity
},


};

var manager = new kakao.maps.Drawing.DrawingManager(options);


var toolbox = new kakao.maps.Drawing.Toolbox({drawingManager: manager});


map.addControl(toolbox.getElement(), kakao.maps.ControlPosition.BOTTOM);

var undoBtn = document.getElementById('undo');
var redoBtn = document.getElementById('redo');


manager.addListener('state_changed', function() {

	if (manager.undoable()) {
		undoBtn.disabled = false;
		undoBtn.className = "";
	} else { 
		undoBtn.disabled = true;
		undoBtn.className = "disabled";
	}
	
	if (manager.redoable()) {
		redoBtn.disabled = false;
		redoBtn.className = "";
	} else { 
		redoBtn.disabled = true;
		redoBtn.className = "disabled";
	}

});

function undo() {
	manager.undo();
}
function redo() {
	manager.redo();
}

undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click' ,redo);





async function getDataFromDrawingMap() {
    await axios.get('http://localhost:4000/map/datapull')
    .then(function(response) { 
        var data = response.data[0].data;


        removeOverlays();

        drawMarker(data[kakao.maps.drawing.OverlayType.MARKER]);
        drawPolyline(data[kakao.maps.drawing.OverlayType.POLYLINE]);
        drawCircle(data[kakao.maps.drawing.OverlayType.CIRCLE]);
        drawRectangle(data[kakao.maps.drawing.OverlayType.RECTANGLE]);

    })
    .catch(function(error) {
        console.log(error);
    })

}


async function PostDataFromDrawingMap() {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }


    var data = manager.getData();

    const body = JSON.stringify({data});

    console.log(data);

    await axios.post('http://localhost:4000/map/datapush', body, config)
    .then(function(response) { 
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })

}

function removeOverlays() {
    var len = overlays.length, i = 0;

    for (; i < len; i++) {
        overlays[i].setMap(null);
    }

    overlays = [];
}

function drawMarker(markers) {
    var len = markers.length, i = 0;

    for (; i < len; i++) {
        var marker = new kakao.maps.Marker({
            map: map, 
            position: new kakao.maps.LatLng(markers[i].y, markers[i].x), 
            zIndex: markers[i].zIndex
        });

        overlays.push(marker);
    }
}



function drawPolyline(lines) {
    var len = lines.length, i = 0;

    for (; i < len; i++) {
        var path = pointsToPath(lines[i].points);
        var style = lines[i].options;
        var polyline = new kakao.maps.Polyline({
            map: map,
            path: path,
            strokeColor: style.strokeColor,
            strokeOpacity: style.strokeOpacity,
            strokeStyle: style.strokeStyle,
            strokeWeight: style.strokeWeight
        });

        overlays.push(polyline);
    }
}



function drawCircle(circles) {
    var len = circles.length, i = 0;

    for (; i < len; i++) {
        var style = circles[i].options;
        var circle = new kakao.maps.Circle({
            map: map, 
            center: new kakao.maps.LatLng(circles[i].center.y, circles[i].center.x), 
            radius: circles[i].radius,
            strokeColor: style.strokeColor,
            strokeOpacity: style.strokeOpacity,
            strokeStyle: style.strokeStyle,
            strokeWeight: style.strokeWeight,
            fillColor: style.fillColor,
            fillOpacity: style.fillOpacity
        });

        overlays.push(circle);
    }
}

function drawRectangle(rects) {
    var len = rects.length, i = 0;

    for (; i < len; i++) {
        var style = rects[i].options;
        var rect = new kakao.maps.Rectangle({
            map: map, 
            bounds: new kakao.maps.LatLngBounds(
                new kakao.maps.LatLng(rects[i].sPoint.y, rects[i].sPoint.x),
                new kakao.maps.LatLng(rects[i].ePoint.y, rects[i].ePoint.x)
            ), 
            strokeColor: style.strokeColor,
            strokeOpacity: style.strokeOpacity,
            strokeStyle: style.strokeStyle,
            strokeWeight: style.strokeWeight,
            fillColor: style.fillColor,
            fillOpacity: style.fillOpacity
        });

        overlays.push(rect);
    }
}


function pointsToPath(points) {
    var len = points.length, 
        path = [], 
        i = 0;

    for (; i < len; i++) { 
        var latlng = new kakao.maps.LatLng(points[i].y, points[i].x);
        path.push(latlng); 
    }

    return path;

}

    getDataFromDrawingMap();

document.getElementById('apply').addEventListener('click', PostDataFromDrawingMap);






    }, [])
    
    const classes = useStyles();

    return (
        <div id='myMap' className={classes.mapdiv}>
            <div className={classes.undo}>
                <button id='undo'>undo</button>
                <button id='redo'>redo</button>
            </div>
            <div className={classes.apply}>
                <button id='apply'>apply</button>
            </div>
        </div>
        
    )
}
