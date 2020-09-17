function BmobApi(e, ac, as, i, yo) {
	$.ajax({
		type: e,
		url: 'https://api2.bmob.cn/1/classes/' + ac,
		headers: {
			"X-Bmob-Application-Id": "4f4ca7acf726f7db9751abaf787a953e",
			"X-Bmob-REST-API-Key": "26985dfba2f7f2bbe645c973f6854a33",
			"Content-Type": "application/json",
		},
		data: as,
		success: (data) => {
			i(data)
		},
		error: (data) => {
			yo(data)
		},
	});
}

function RecordAccess() {
	var total = 0;
	BmobApi('get', 'access/3RQODDDi', '', function(data) {
		if (data.total != 0) BmobApi('put', 'access/3RQODDDi', JSON.stringify({
			"total": data.total + 1
		}), function(a) {}, function(b) {});
	}, function(b) {})
}

function initPage() {

	BmobApi('get', 'Image/MZb5IIIl', '', function(res) {
		document.getElementById("g1").style.display="none"
	}, function(b) {});

	BmobApi('get', 'Image/Nj2nAAAj', '', function(res) {
		document.getElementById("g2").setAttribute("href", res.path);
	}, function(b) {});

	BmobApi('get', 'Image/UMpc777J', '', function(res) {
		document.getElementById("g3").setAttribute("href", res.path);
	}, function(b) {});

	BmobApi('get', 'Image/E63e444C', '', function(res) {
		document.getElementById("nod1").setAttribute("href", res.path);
	}, function(b) {});

	BmobApi('get', 'Image/KngCFFFH', '', function(res) {
		document.getElementById("node2").setAttribute("href", res.path);
	}, function(b) {});

	BmobApi('get', 'Image/Ojl5666A', '', function(res) {
		document.getElementById("node3").setAttribute("href", res.path);
	}, function(b) {});
	BmobApi('get', 'Image/5w2v1113', '', function(res) {
		document.getElementById("node4").setAttribute("href", res.path);
	}, function(b) {});
	BmobApi('get', 'Text/SoTzHHHR', '', function(res) {
		document.getElementById("text").innerHTML = res.info;
	}, function(b) {});

}
