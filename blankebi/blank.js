function selectOption(option) {
  document.getElementById('selectedValue').textContent = option;
}



function selectOption(option) {
  document.getElementById('selectedValue').textContent = option;

  document.getElementById('small-box').style.display = 'none';
  document.getElementById('big-box').style.display = 'none';

  if (option === 'სამინისტროს კორესპონდენციის/წერილის ბლანკის ნიმუში' || option === 'სსიპ-ის ადმინისტრაციულ-სამართლებრივი აქტის ბლანკის ნიმუში') {
    document.getElementById('small-box').style.display = 'block';
  } else if (option === 'სამინისტროს კორესპონდენციის/წერილის ბლანკის ნიმუშები' || option === 'სსიპ-ის კორესპონდენციის/წერილის ბლანკის ნიმუში') {
    document.getElementById('big-box').style.display = 'block';
  }
}
