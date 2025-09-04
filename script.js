let streak=0;
function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.style.display='none');
  document.getElementById(id).style.display='block';
}
// Journey (12 weeks map, simplified)
document.getElementById('journey').innerHTML='<h2>Journey Map</h2>'+
  '<p>Week 1: Lesson 1 ⭐ <button>Unlock $7</button> Lesson 2 🔒 Lesson 3 🔒 Story 🔒</p>'+
  '<p>Week 2–12 locked 🔒</p>';
// Streak
document.getElementById('streak').innerHTML='<h2>Daily Free Streak</h2><p>20 basic exercises available today.</p>';
// Books
document.getElementById('books').innerHTML='<h2>Books</h2>'+
  '<div class="book"><h3>El Cuervo</h3><button>Read PDF</button><button>Buy Physical</button><button>Immersive</button></div>'+
  '<div class="book"><h3>Pride & Prejudice</h3><button>$2</button></div>'+
  '<div class="book"><h3>Dracula</h3><button>$2</button></div>';
// Corrections demo
document.getElementById('corrections').innerHTML='<h2>Corrections</h2><p>Homework feedback will appear here.</p>'+
  '<h3>Q&A</h3><p>Q: How do you say estás loco in English?<br>A: You are crazy!</p>';
// Profile
document.getElementById('profile').innerHTML='<h2>Profile</h2><p>Name: Student</p>';