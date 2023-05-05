const fetchSheetData = async () => {
    const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT5CXl8JYlBjMn4Ffqt_N-ZqnRxjoc4jj9ufyXcSyoCeENcLc-wXemuDmDR1K7NIOoXm0t6RgiMJbbr/pub?output=tsv';
  
    try {
      const response = await fetch(sheetURL);
      const csvData = await response.text();
      const rows = csvData.split('\n').slice(1);
  
      const rewardNFTData = rows
      .filter((row) => row.trim() !== '') // Filter out empty rows
      .map((row) => {
        const [title, cost, description, imageURL, isRedeemed] = row.split('\t');
        return {
          title,
          cost: parseInt(cost, 10),
          description,
          imageURL,
          isRedeemed: isRedeemed?.trim().toLowerCase() === 'true',
        };
      });
    
  
      return rewardNFTData;
    } catch (error) {
      console.error('Error fetching data from Google Sheet:', error);
      return [];
    }
  };
  
  export default fetchSheetData;
  