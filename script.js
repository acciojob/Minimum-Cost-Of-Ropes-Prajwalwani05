
  function connectRopes(input) {
  // Step 1: Parse the input string
  const ropeLengths = input.split(',').map(Number);

  // Step 2: Create a min-heap
  const minHeap = new MinHeap();
  for (let i = 0; i < ropeLengths.length; i++) {
    minHeap.insert(ropeLengths[i]);
  }

  // Step 3: Initialize total cost
  let totalCost = 0;

  // Step 4: Connect ropes until only one remains
  while (minHeap.size() > 1) {
    // Step 4a: Extract two minimum ropes
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();

    // Step 4b: Calculate sum of lengths
    const sum = rope1 + rope2;

    // Step 4c: Update total cost
    totalCost += sum;

    // Step 4d: Insert sum back into min-heap
    minHeap.insert(sum);
  }

  // Step 6: Add length of final rope to total cost
  totalCost += minHeap.extractMin();

  // Step 7: Print total cost
  document.getElementById('result').innerText = totalCost;
}
