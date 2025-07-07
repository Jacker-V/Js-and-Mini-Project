const storyContainer = document.querySelector('.story-container');
const scaryStoryBtn = document.getElementById('scary-btn');
const funnyStoryBtn = document.getElementById('funny-btn');
const adventureStoryBtn = document.getElementById('adventure-btn');
const resultParagraph = document.getElementById('result');

const storyObj = {
  scary: {
    story: "Trong đêm, có một cô gái không chịu ngủ và rồi giữa đêm cô ấy chắp hai tay lại và bắn súng vào người yêu",
    borderColor: "#ee4b2b"
  },
  funny: {
    story: "Kỉ niệm rất vui là khi thấy cô ấy tẩy trang cho tôi, và lâu lắm mới thấy bạn ấy cười nhiều và tươi thế",
    borderColor: "#f1be32"
  },
  adventure: {
    story: "Một lần nhớ đời là chuyến sông bạch đằng và cô ấy không ôm tôi và sau đó 2 đứa lạc kiểu gì rất xa. Ngoài ra còn có 1 lần đi về bị thủng lốp rõ to và dong bộ. May sao không ngã",
    borderColor: "#acd157"
  }
};

function displayStory(genre){
    if (storyObj.hasOwnProperty(genre)) {
        resultParagraph.textContent = storyObj[genre].story;
        storyContainer.style.borderColor = storyObj[genre].borderColor;
        
    }
}



scaryStoryBtn.addEventListener('click', () => displayStory("scary"));
funnyStoryBtn.addEventListener('click', () =>displayStory("funny"));
adventureStoryBtn.addEventListener('click', () =>displayStory("adventure"));

