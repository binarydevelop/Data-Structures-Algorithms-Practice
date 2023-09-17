function toh(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disk from ${source} to ${destination}`);
      return 1; // Base case: One move
    }
  
    const count1 = toh(n - 1, source, destination, auxiliary);
    
    console.log(`Move disk from ${source} to ${destination}`);
    
    const count2 = toh(n - 1, auxiliary, source, destination);
    
    return count1 + 1 + count2; // Total count of moves
  }
  
  const sourceRod = 'A';
  const auxiliaryRod = 'B';
  const destinationRod = 'C';
  const numberOfDisks = 4;
  
  const totalMoves = toh(numberOfDisks, sourceRod, auxiliaryRod, destinationRod);
  console.log(`Total moves required: ${totalMoves}`);
  