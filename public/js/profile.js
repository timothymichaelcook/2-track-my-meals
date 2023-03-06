const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#meal-name').value.trim();
  const numberOftakeOut = document.querySelector('#meal-funding').value.trim();
  const mealType = document.querySelector('#meal-type').value.trim();
  const dayOfWeek= document.querySelector('#day-week').value.trim();

  if (name && day_week && numberOftakeOut && meal_type) {
    const response = await fetch(`/api/meals`, {
      method: 'POST',
      body: JSON.stringify({
        meal_name: name,
        dayOfWeek:string,
        mealType,
        goal_met: true,
        numberOftakeOut: 100,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/meals/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-meal-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.meal-list')
  .addEventListener('click', delButtonHandler);

// chart code
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: '# of Meals Eaten out This Week',
        data: [2, 1, 0, 3, 0, 5, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
