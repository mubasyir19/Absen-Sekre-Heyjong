export const formattedDate = (dataDate: string) => {
  return new Date(dataDate).toLocaleString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
  });
};

export const formatIndonesiaTime = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
