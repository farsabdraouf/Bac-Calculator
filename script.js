// Keep the existing subject definitions (sciencesSubjects, mathSubjects, etc.)
const sciencesSubjects = [
    { id: 'si', name: 'علوم طبيعية', coefficient: 6 },
    { id: 'ma', name: 'رياضيات', coefficient: 5 },
    { id: 'ph', name: 'فيزياء', coefficient: 5 },
    { id: 'ar', name: 'عربية', coefficient: 3 },
    { id: 'fr', name: 'فرنسية', coefficient: 2 },
    { id: 'en', name: 'إنجليزية', coefficient: 2 },
    { id: 'ge', name: 'اجتماعيات', coefficient: 2 },
    { id: 'is', name: 'إسلامية', coefficient: 2 },
    { id: 'pi', name: 'فلسفة', coefficient: 2 },
    { id: 'sp', name: 'رياضة', coefficient: 1 }
];

const mathSubjects = [
    { id: 'ma', name: 'رياضيات', coefficient: 7 },
    { id: 'ph', name: 'فيزياء', coefficient: 6 },
    { id: 'ar', name: 'عربية', coefficient: 3 },
    { id: 'si', name: 'علوم طبيعية', coefficient: 2 },
    { id: 'fr', name: 'فرنسية', coefficient: 2 },
    { id: 'en', name: 'إنجليزية', coefficient: 2 },
    { id: 'ge', name: 'اجتماعيات', coefficient: 2 },
    { id: 'is', name: 'إسلامية', coefficient: 2 },
    { id: 'pi', name: 'فلسفة', coefficient: 2 },
    { id: 'sp', name: 'رياضة', coefficient: 1 }
];

const techSubjects = [
    { id: 'te', name: 'تكنولوجيا', coefficient: 7 },
    { id: 'ma', name: 'رياضيات', coefficient: 6 },
    { id: 'ph', name: 'فيزياء', coefficient: 6 },
    { id: 'ar', name: 'عربية', coefficient: 3 },
    { id: 'fr', name: 'فرنسية', coefficient: 2 },
    { id: 'en', name: 'إنجليزية', coefficient: 2 },
    { id: 'ge', name: 'اجتماعيات', coefficient: 2 },
    { id: 'is', name: 'إسلامية', coefficient: 2 },
    { id: 'pi', name: 'فلسفة', coefficient: 2 },
    { id: 'sp', name: 'رياضة', coefficient: 1 }
];

const ecoSubjects = [
    { id: 'te', name: 'تسيير محاسبي ومالي', coefficient: 6 },
    { id: 'ma', name: 'رياضيات', coefficient: 5 },
    { id: 'ph', name: 'اقتصاد ومناجمنت', coefficient: 5 },
    { id: 'ar', name: 'عربية', coefficient: 3 },
    { id: 'fr', name: 'فرنسية', coefficient: 2 },
    { id: 'en', name: 'إنجليزية', coefficient: 2 },
    { id: 'ge', name: 'اجتماعيات', coefficient: 2 },
    { id: 'is', name: 'إسلامية', coefficient: 2 },
    { id: 'ad', name: 'قانون', coefficient: 2 },
    { id: 'pi', name: 'فلسفة', coefficient: 2 },
    { id: 'sp', name: 'رياضة', coefficient: 1 }
];

const arSubjects = [
    { id: 'ar', name: 'عربية', coefficient: 6 },
    { id: 'pi', name: 'فلسفة', coefficient: 6 },
    { id: 'ge', name: 'اجتماعيات', coefficient: 4 },
    { id: 'fr', name: 'فرنسية', coefficient: 3 },
    { id: 'en', name: 'إنجليزية', coefficient: 3 },
    { id: 'is', name: 'إسلامية', coefficient: 2 },
    { id: 'ma', name: 'رياضيات', coefficient: 2 },
    { id: 'sp', name: 'رياضة', coefficient: 1 }
];

const lnSubjects = [
    { id: 'ar', name: 'عربية', coefficient: 5 },
    { id: 'fr', name: 'فرنسية', coefficient: 5 },
    { id: 'en', name: 'إنجليزية', coefficient: 5 },
    { id: 'ln', name: 'لغة اجنبية ثالثة', coefficient: 4 },
    { id: 'is', name: 'إسلامية', coefficient: 2 },
    { id: 'ge', name: 'اجتماعيات', coefficient: 4 },
    { id: 'pi', name: 'فلسفة', coefficient: 2 },
    { id: 'ma', name: 'رياضيات', coefficient: 2 },
    { id: 'sp', name: 'رياضة', coefficient: 1 }
];

function createSubjectInput(subject) {
    const div = document.createElement('div');
    div.className = 'mb-4';

    const label = document.createElement('label');
    label.htmlFor = subject.id;
    label.className = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1';
    label.textContent = `${subject.name}:`;

    const input = document.createElement('input');
    input.type = 'number';
    input.id = subject.id;
    input.className = 'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300';
    input.min = '0';
    input.max = '20';
    input.step = '0.5';
    input.required = true;

    div.appendChild(label);
    div.appendChild(input);

    return div;
}


function renderSubjects(subjects) {
    const subjectsContainer = document.getElementById('subjects');
    subjectsContainer.innerHTML = ''; // Clear existing subjects

    subjects.forEach(subject => {
        subjectsContainer.appendChild(createSubjectInput(subject));
    });
}

function toggleSubjects() {
    const stream = document.getElementById('stream').value;
    if (stream === 'sciences') {
        renderSubjects(sciencesSubjects);
    } else if (stream === 'math') {
        renderSubjects(mathSubjects);
    } else if (stream === 'tech') {
        renderSubjects(techSubjects);
    } else if (stream === 'eco') {
        renderSubjects(ecoSubjects);
    } else if (stream === 'ar') {
        renderSubjects(arSubjects);
    } else if (stream === 'ln') {
        renderSubjects(lnSubjects);
    } 
}

function calculateResult() {
    const stream = document.getElementById('stream').value;
    const subjects = stream === 'sciences' ? sciencesSubjects :
    stream === 'math' ? mathSubjects :
    stream === 'tech' ? techSubjects :
    stream === 'eco' ? ecoSubjects :
    stream === 'ar' ? arSubjects :
    stream === 'ln' ? lnSubjects :
    []; // أو يمكنك تعيين قيمة افتراضية أخرى

    let totalPoints = 0;
    let totalCoefficients = 0;

    subjects.forEach(subject => {
        const grade = parseFloat(document.getElementById(subject.id).value) || 0;
        totalPoints += grade * subject.coefficient;
        totalCoefficients += subject.coefficient;
    });

    const result = totalPoints / totalCoefficients;

    const modal = document.getElementById('myModal');
    const resultElement = document.getElementById('modalResult');

    // تحديث عرض النتيجة
    resultElement.innerHTML = `<p class="text-xl font-bold mb-2">النتيجة: ${result.toFixed(2)}</p>`;

    if (result >= 10 && result < 12) {
        resultElement.innerHTML += 'تهانينا، التقدير: مقبول.';
        modal.style.backgroundColor = '#4caf50c7'; // Green background
    } else if (result >= 12 && result < 14.5) {
        resultElement.innerHTML += 'تهانينا، التقدير: قريب من الجيد.';
        modal.style.backgroundColor = '#4caf50c7'; // Green background
    } else if (result >= 14.5 && result < 15.5) {
        resultElement.innerHTML += 'تهانينا، التقدير: جيد.';
        modal.style.backgroundColor = '#4caf50c7'; // Green background
    } else if (result >= 15.5 && result < 17) {
        resultElement.innerHTML += 'تهانينا، التقدير: جيد جداً.';
        modal.style.backgroundColor = '#4caf50c7'; // Green background
    } else if (result >= 17 && result <= 20) {
        resultElement.innerHTML += 'تهانينا، التقدير: ممتاز.';
        modal.style.backgroundColor = '#4caf50c7'; // Green background
    } else if (result < 10 && result > 0) {
        resultElement.innerHTML += 'حظ أوفر في المرة القادمة إن شاء الله.';
        modal.style.backgroundColor = '#d65f5fc7'; // Red background
    } else {
        resultElement.innerHTML += 'هناك خطأ في التحقق من نقاط موادك.';
        modal.style.backgroundColor = '#111827c7'; // Default background color
    }

    modal.style.display = 'block';
    
}



function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

// مستمعات الأحداث
window.onload = function() {
    toggleSubjects();
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    // إضافة مستمع حدث للنقر خارج النافذة المنبثقة لإغلاقها
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('myModal');
        if (event.target === modal) {
            closeModal();
        }
    });
};

const toggle = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
}

toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  const isDarkMode = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// في ملف JavaScript الرئيسي
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }