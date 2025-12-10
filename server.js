const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.static('.'));

// Загрузка товаров
app.get('/api/products', (req, res) => {
  // Здесь можно загрузить товары из файла или базы данных
  res.json([]);
});

// Обработка заказов
app.post('/api/order', (req, res) => {
  // Здесь можно сохранить заказ в файл или базу данных
  console.log('Новый заказ:', req.body);
  res.json({ success: true });
});

// Обработка отзывов
app.post('/api/reviews', (req, res) => {
  // Здесь можно сохранить отзыв в файл или базу данных
  console.log('Новый отзыв:', req.body);
  res.json({ success: true });
});

// Загрузка отзывов
app.get('/api/reviews/:productId', (req, res) => {
  // Здесь можно загрузить отзывы из файла или базы данных
  res.json([]);
});

// Аутентификация администратора
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === 'admin123') { // Замените на свой пароль
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Статистика для админ-панели
app.get('/api/stats', (req, res) => {
  res.json({
    totalOrders: 0,
    totalRevenue: 0,
    popularProducts: []
  });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});