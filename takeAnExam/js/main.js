document.addEventListener("DOMContentLoaded", function () {
    // 要求:
    // 1. 创建一个名为Page的构造函数
    // 2. 该对象在实例化时可以接受试卷数据作为参数
    // 3. Page的实例可以调用init初始化方法，将试卷数据通过DOM操作渲染在页面上成为网页试卷
    // 4. 点击选择题的答案选项，背景高亮，再次点击，取消选择答案
    // 5. 所有选择题都勾选了，才可以提交试卷，否则，不可以提交试卷
    // 6. 当点击提交试卷，延迟300ms后，根据试卷数据提供的答案计算成绩并显示考试结果

    function Page(data) {
        this.data = data;
        this.selectedAnswers = new Array(data.length).fill(null);
    }

    Page.prototype.init = function () {
        const examBox = document.querySelector('.exam_box');
        this.data.forEach((question, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const questionDiv = document.createElement('div');
            questionDiv.className = 'question_box';
            questionDiv.innerText = question.q;
            itemDiv.appendChild(questionDiv);

            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer_box';
            const ul = document.createElement('ul');
            question.options.forEach((option, optionIndex) => {
                const li = document.createElement('li');
                li.innerText = option.name;
                li.addEventListener('click', () => this.selectAnswer(index, optionIndex, li));
                ul.appendChild(li);
            });
            answerDiv.appendChild(ul);
            itemDiv.appendChild(answerDiv);

            examBox.appendChild(itemDiv);
        });

        const submitBtn = document.querySelector('button');
        submitBtn.addEventListener('click', () => this.submit());
    }

    Page.prototype.selectAnswer = function (questionIndex, optionIndex, li) {
        const ul = li.parentNode;
        Array.from(ul.children).forEach(child => child.classList.remove('active'));

        if (this.selectedAnswers[questionIndex] === optionIndex) {
            this.selectedAnswers[questionIndex] = null;
        } else {
            li.classList.add('active');
            this.selectedAnswers[questionIndex] = optionIndex;
        }
    }

    Page.prototype.submit = function () {
        if (this.selectedAnswers.includes(null)) {
            alert('请完成所有选择题');
            return;
        }

        setTimeout(() => {
            let score = 0;
            this.data.forEach((question, index) => {
                const selectedOption = this.selectedAnswers[index];
                if (question.options[selectedOption].name[0] === question.answer) {
                    score += question.score;
                }
            });

            document.querySelector('.exam_score').innerText = score;
        }, 300);
    }

    var data = [{
        "q": "1.唐太宗的名字叫？",
        "options": [{
            "name": "A.李渊"
        },
        {
            "name": "B.李世民"
        },
        {
            "name": "C.李治"
        },
        {
            "name": "D.武则天"
        }
        ],
        "score": 20,
        "answer": "B"
    },
    {
        "q": "2.唐太宗把文成公主嫁给吐蕃族首领叫什么？",
        "options": [{
            "name": "A.囊日论赞"
        },
        {
            "name": "B.朗达玛"
        },
        {
            "name": "C.松赞干布"
        },
        {
            "name": "D.扎西邹巴"
        }
        ],
        "score": 20,
        "answer": "C"
    },
    {
        "q": "3.1661年,收复了台湾的民族英雄是谁？",
        "options": [{
            "name": "A.郑成功"
        },
        {
            "name": "B.戚继光"
        },
        {
            "name": "C.林则徐"
        },
        {
            "name": "D.李元芳"
        }
        ],
        "score": 20,
        "answer": "A"
    },
    {
        "q": "4.我国历史上的第一个皇帝是？",
        "options": [{
            "name": "A.禹"
        },
        {
            "name": "B.姬发"
        },
        {
            "name": "C.秦始皇"
        },
        {
            "name": "D.刘备"
        }
        ],
        "score": 20,
        "answer": "C"
    },
    {
        "q": "5.被后人尊奉为中华民族“人文始祖”的是？",
        "options": [{
            "name": "A.黄帝"
        },
        {
            "name": "B.伏羲"
        },
        {
            "name": "C.炎帝"
        },
        {
            "name": "D.以上都是"
        }
        ],
        "score": 20,
        "answer": "D"
    }
    ];

    var app = new Page(data);
    app.init();
});