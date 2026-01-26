import React, { useState } from 'react';

export function AddTestimonial() {
    const [rating, setRating] = useState(5);

    const testimonials = [
        { name: "أحمد محمد", stars: 5, text: "تجربة ممتازة وطاقم طبي محترف جداً. شعرت بالراحة والاهتمام." },
        { name: "سارة محمود", stars: 4, text: "العيادة نظيفة جداً والمواعيد دقيقة. شكراً لكم." },
        { name: "مراجع مجهول", stars: 5, text: "أفضل خدمة طبية تلقيتها، أنصح الجميع بالتعامل معهم." },
    ];

    return (
        <section className="testimonials-wrapper">
            <div className="container">
                <header className="section-header">
                    <span className="subtitle">ماذا يقولون عنا</span>
                    <h2>آراء مراجعينـا</h2>
                    <div className="divider"></div>
                </header>

                <div className="reviews-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="modern-card">
                            <div className="card-quotes">“</div>
                            <div className="stars-display">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < item.stars ? "star filled" : "star"}>★</span>
                                ))}
                            </div>
                            <p className="review-text">{item.text}</p>
                            <div className="patient-info">
                                <div className="avatar">{item.name[0]}</div>
                                <span className="patient-name">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="feedback-section">
                    <div className="form-card">
                        <h3>شاركنا تجربتك</h3>
                        <p>رأيك يساعدنا على تقديم خدمة أفضل</p>
                        
                        <form className="modern-form">
                            <div className="input-row">
                                <div className="input-group">
                                    <label>الاسم (اختياري)</label>
                                    <input type="text" placeholder="اسمك الكريم" />
                                </div>
                                <div className="input-group">
                                    <label>التقييم</label>
                                    <div className="rating-selector">
                                        {[5, 4, 3, 2, 1].map((num) => (
                                            <button 
                                                key={num} 
                                                type="button"
                                                onClick={() => setRating(num)}
                                                className={rating === num ? "active" : ""}
                                            >
                                                {num} ★
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="input-group">
                                <label>رأيك بالتفصيل</label>
                                <textarea rows={4} placeholder="كيف كانت تجربتك معنا؟"></textarea>
                            </div>

                            <button type="submit" className="primary-btn">إرسال التقييم</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}