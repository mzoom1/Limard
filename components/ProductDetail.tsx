import React, { useState, useEffect } from 'react';
import { Check, MessageCircle, Share2, ShieldCheck, Truck, Star, User, Send } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
    product: Product;
    onOrder?: (product: Product) => void;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Reviews State
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: "Alex M.", rating: 5, comment: "Works perfectly. The interface is snappy and feels OEM. Installation took about 2 hours.", date: "2 months ago" },
    { id: 2, name: "David K.", rating: 4, comment: "Great upgrade for the price. Wireless connection is stable 99% of the time.", date: "1 month ago" },
    { id: 3, name: "James R.", rating: 5, comment: "Completely transformed the interior tech. Highly recommend for any owner.", date: "2 weeks ago" }
  ]);
  
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset selected image when the product changes
  useEffect(() => {
    setSelectedImage(0);
  }, [product]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
        const review: Review = {
            id: reviews.length + 1,
            name: newReview.name,
            rating: newReview.rating,
            comment: newReview.comment,
            date: "Just now"
        };
        setReviews([review, ...reviews]);
        setNewReview({ name: '', rating: 5, comment: '' });
        setIsSubmitting(false);
    }, 800);
  };

  const averageRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-12 bg-white border-t border-slate-100 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Images */}
          <div className="space-y-4 animate-fade-in">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm relative">
                <img 
                    key={product.images[selectedImage]} // Force re-render on image change for animation
                    src={product.images[selectedImage]} 
                    alt={`${product.brand} CarPlay Interface`} 
                    className="w-full h-full object-cover animate-fade-in"
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-slate-900 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                        <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col justify-center">
             <div className="mb-2">
                 <span className="text-sm font-semibold text-slate-500 tracking-wider uppercase">Limard Store</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                 Apple CarPlay for <br/> {product.brand} {product.model}
             </h2>

             <div className="flex items-center gap-4 mb-6">
                 <span className="text-3xl font-medium text-slate-900">{product.price}</span>
                 <div className="flex items-center gap-1">
                     <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                     <span className="font-bold text-slate-900">{averageRating}</span>
                     <span className="text-slate-500 text-sm">({reviews.length} reviews)</span>
                 </div>
             </div>

             <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-8 w-fit">
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                 In stock, ready to ship
             </div>

             <div className="space-y-4 mb-8">
                 <button 
                    onClick={() => onOrder?.(product)}
                    className="flex items-center justify-center w-full bg-[#111111] hover:bg-black text-white text-lg font-bold py-5 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
                 >
                     Order Now
                 </button>
                 <p className="text-center text-xs text-slate-500">Free express shipping within USA</p>
             </div>

             {/* Features/Trust */}
             <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 mb-8">
                 <div className="flex items-center gap-3">
                     <div className="p-2 bg-slate-50 rounded-full">
                        <Truck className="h-5 w-5 text-slate-900" />
                     </div>
                     <span className="text-sm font-bold text-slate-700">Fast Delivery</span>
                 </div>
                 <div className="flex items-center gap-3">
                     <div className="p-2 bg-slate-50 rounded-full">
                        <ShieldCheck className="h-5 w-5 text-slate-900" />
                     </div>
                     <span className="text-sm font-bold text-slate-700">1 Year Warranty</span>
                 </div>
             </div>

             <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                 <span className="text-sm font-bold text-slate-900 cursor-pointer hover:text-brand-red flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> Need help?
                 </span>
                 <div className="flex gap-4 text-slate-400">
                     <Share2 className="h-5 w-5 cursor-pointer hover:text-slate-900 transition-colors" />
                 </div>
             </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-slate-200 pt-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center uppercase tracking-tight">Client Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                
                {/* Review Form */}
                <div className="md:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 h-fit sticky top-24">
                    <h4 className="text-xl font-bold text-slate-900 mb-6">Write a Review</h4>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Your Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <Star className={`w-6 h-6 ${star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Your Name</label>
                            <input 
                                type="text"
                                value={newReview.name}
                                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:border-brand-red/50 transition-colors text-sm"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Review</label>
                            <textarea 
                                value={newReview.comment}
                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:border-brand-red/50 transition-colors text-sm min-h-[100px] resize-none"
                                placeholder="Share your experience..."
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-[#111111] hover:bg-black text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {isSubmitting ? 'Posting...' : (
                                <>
                                    Post Review <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Reviews List */}
                <div className="md:col-span-8 space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <User className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 leading-none">{review.name}</h5>
                                        <span className="text-xs text-slate-400">{review.date}</span>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                "{review.comment}"
                            </p>
                        </div>
                    ))}
                    
                    {reviews.length === 0 && (
                        <div className="text-center py-12 text-slate-400">
                            No reviews yet. Be the first to review!
                        </div>
                    )}
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;