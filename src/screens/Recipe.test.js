import React from 'react';

import Recipe from './Recipe'
import RecipeArray from '../components/RecipeArray';



test('List of recipes', () => {
     expect(RecipeArray).toContain('Vegan');

});

// test('should increment counter', () => {
//   const { result } = renderHook(() => useRecipe())

//   act(() => {
//     result.current.generateRecipe()
//   })

//   expect(result.current.recipe).toBe(1);
//   expect(fn).toHaveBeenCalled();
// })

