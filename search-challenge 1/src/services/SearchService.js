const data = [];

export function addDoc(doc) {
  //console.log('doc', doc);
  // store doc for later retrieval
  data.push(doc);

}

export function search(query) {
  // search stored docs and then:
  //const info = document.querySelector('.col-xs-12');
  //const results = [];
  console.table(data);
  for (var i = 0; i < data.length; i++) {
  	for (key in data[i]) {
  		if (data[i][key].indexOf(query) !== -1){
  			console.log(data[i]['title']);
  			//results.push(data[i]);
  			return [{
			    title: data[i]['title'],
			    body:  data[i]['body']
			  }];
  		} 
  		
  	}
  	//return results;
  }


  // return [{
  //   results: results
  // }];
}
