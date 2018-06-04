import {areArraysEqualByObjectId} from './areArraysEqualByObjectId'; 

describe('areArraysEqualByObjectId', function () {
		it('should return true if the objects are matching in memory', () => {
			//given
			const obj1 = {id: 1};
			const obj2 = {id: 2};
			const arr1 = [obj1, obj2];
			const arr2 = [obj1, obj2];
			//when
			const result = areArraysEqualByObjectId(arr1, arr2);
			//then
			expect(result).toBeTruthy();
		});
		it('should return true if the objects in the arrays have matching id properties, but are not the same objects in memory', () => {
			//given
			const arr1 = [{id: 1}, {id: 2}];
			const arr2 = [{id: 1}, {id: 2}];
			//when
			const result = areArraysEqualByObjectId(arr1, arr2);
			//then
			expect(result).toBeTruthy();
		});
		it('should return false if arrays are not the same length', () => {
			//given
			const arr1 = [{}, {}];
			const arr2 = [{}];
			//when
			const result = areArraysEqualByObjectId(arr1, arr2);
			//then
			expect(result).toBeFalsy();
		});
		it('should return false if the objects in the arrays do not have matching id properties', () => {
			//given
			const arr1 = [{id: 1}, {id: 2}];
			const arr2 = [{id: 3}, {id: 4}];
			//when
			const result = areArraysEqualByObjectId(arr1, arr2);
			//then
			expect(result).toBeFalsy();
		});
		it('should return false if the objects in the arrays have matching id properties, but are in the wrong order', () => {
			//given
			const arr1 = [{id: 1}, {id: 2}];
			const arr2 = [{id: 2}, {id: 1}];
			//when
			const result = areArraysEqualByObjectId(arr1, arr2);
			//then
			expect(result).toBeFalsy();
		});
	});
