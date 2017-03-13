var dataTypes = function(val){

	switch(typeof val){
		//case null: 
		case 'undefined':
				return 'no value';
		case 'string':
					return val.length;
		case 'boolean':
					return val;
		case 'number':
					if(val  === 100){
						return "equal to 100";
					}
					else if(val < 100){
						return "less than 100";
					}
					else{
						return "more than 100";
					}
		case 'object':
					if (val == null){
						
						return 'no value'; 
					}
					
					 else if (val.length > 2){
						return val[2];
					}
					else {
					return undefined;
					}

		case 'function':
						var callback = val(true);
						return 'called callback';
							
							
						
	}
}

module.exports = dataTypes;