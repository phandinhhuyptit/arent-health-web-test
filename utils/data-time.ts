export const formateDateMonth = (date: number, month: number) => {
    const formattedDate = date < 10 ? `0${date}` : `${date}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  
    return `${formattedMonth}.${formattedDate}`;
  };
  