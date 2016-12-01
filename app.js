function mergeDataStreams(stream1, stream2) {
    //create a object for the output of the merge data
    var results = {};
    //loop through the stream1 elements
    for (var i = 0; i < stream1.length; i++) {
        // stream1[i].id is the ID of every element in the stream1
        // populate the output marged data object (results) witht the elements from stream1
        results[stream1[i].id] = stream1[i];
    }

    //checking the initial permutation of the id into a key
    console.log(results);

    //loop through the keys of the resutls object
    for (var resultsKey in results) {
        //for each one of the keys find the coresponding id in the stream2
        var otherData = stream2.find(
            function (item) {
                return item.id === resultsKey;
            });
        //loop thorugh the output of the previous loop (otherData) and populate the stream2 inside the stream1 element
        for (var otherDataKey in otherData) {
            results[resultsKey][otherDataKey] = otherData[otherDataKey];
        }
    }

    //checking the final merge based on the key generated above
    console.log(results);

    //return the marge results of the stream1 and stream2
    return Object.keys(results).map(function (item) {
        return results[item];
    });
}


// data
var dataSource1 = [
    {
        id: '0',
        firstName: 'Juan',
        lastName: 'Doe',
        age: 32
    },
    {
        id: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 31
    },
    {
        id: '2',
        firstName: 'Janice',
        lastName: 'Doe',
        age: 30
    },
    {
        id: '3',
        firstName: 'Jake',
        lastName: 'Doe',
        age: 29
    },
];

var dataSource2 = [
    {
        id: '0',
        occupation: 'architect',
        address: {
            street: '123 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
    {
        id: '1',
        occupation: 'architect',
        address: {
            street: '234 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
    {
        id: '2',
        occupation: 'architect',
        address: {
            street: '345 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
    {
        id: '3',
        occupation: 'architect',
        address: {
            street: '456 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
];




/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testMergeDataStreams(stream1, stream2) {
    var expected = stream1.map(function (item) {
        return _.assign(
            _.clone(item), stream2.find(function (item2) {
                return item.id === item2.id;
            }));
    });

    var actual = mergeDataStreams(stream1, stream2);

    var passing = actual && expected.map(function (item) {
        return _.isEqual(
            item,
            actual.find(function (_item) {
                return _item.id === item.id;
            })
        );
    }).every(function (result) {
        return result;
    });

    if (passing) {
        console.log('SUCCESS! mergeDataStreams works');
    } else {
        console.log('FAILURE! mergeDataStreams not working');
    }
}

testMergeDataStreams(dataSource1, dataSource2);
