document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".st-search");
  const searchButton = document.querySelector(".st-search-send");

  function isValidSearchTerm(searchTerm) {
    // 1. 글자 수가 1글자 이상 10글자 이하인지 확인
    if (searchTerm.length < 1 || searchTerm.length > 10) {
      return false;
    }

    // 2. 특수문자가 포함되어 있는지 확인
    const specialCharPattern = /[~!@#$%^&*()_+`\-={}[\]:;"'<>,.?/\\|]/;
    if (specialCharPattern.test(searchTerm)) {
      return false;
    }

    // // 3. 한국어 또는 영어로만 구성되어 있는지 확인
    // const validCharPattern = /^[가-힣a-zA-Z]+$/;
    // if (!validCharPattern.test(searchTerm)) {
    //   return false;
    // }

    return true;
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (isValidSearchTerm(searchTerm)) {
      const url = "/sponsoredtag/check?value=" + encodeURIComponent(searchTerm);
      window.location.href = url;
    } else {
      alert(
        "검색어는 1~10글자의 한국어 또는 영어로만 구성되어야 하며, 특수문자를 포함할 수 없습니다."
      );
    }
  });
});
