var ship = [[3,9],[2,9],[1,9],[4,6],[4,5],[4,4],[3,0],[3,1],[3,2],[1,5],[1,4],[1,3],[1,0],[1,1],[1,2]];

function searchPositions(arr, pos) {
		var result = '';

    arr.forEach( function(position, index) {
    	if (position.toString() === pos.toString()) {
    		result = {position: position, index: index};
    	}
    });

    return result;
}

console.log(searchPositions(ship, [2,9]))
