import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, ShieldCheck, CheckCircle2, HeadphonesIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
    const [step, setStep] = useState<'MOBILE' | 'OTP'>('MOBILE');
  const [isLoading, setIsLoading] = useState(false);

  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;
    
    const newOtpArray = [...otpArray];
    newOtpArray[index] = value;
    setOtpArray(newOtpArray);
    
    // Auto focus next
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };


  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length < 10) return;
    setIsLoading(true);
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep('OTP');
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentOtp = otpArray.join('');
    if (currentOtp.length < 6) return;
    setIsLoading(true);
    
    // Fallback name generation from mobile number
    const name = "User_" + mobile.slice(-4);
    const initials = 'U' + mobile.slice(-1);
    
    // Simulate API call to verify OTP and save to localStorage
    setTimeout(() => {
      localStorage.setItem('ritika_user', JSON.stringify({ name, initials, identifier: mobile }));
      setIsLoading(false);
      navigate('/portal/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      
      {/* Left Panel - Visuals (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1600" 
            alt="Premium Motorcycle" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        </div>

        {/* Brand Content */}
        <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full">
          <div>
            <div className="flex flex-col items-start">
              <span className="font-extrabold text-4xl tracking-tight text-white leading-none">
                RITIKA
              </span>
              <span className="font-bold text-xs text-white uppercase tracking-widest mt-1 bg-[#768EA6] px-2 py-0.5 inline-block">
                Financial Corporation
              </span>
            </div>
          </div>
          
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Manage your <br/>
              <span className="text-[#768EA6]">dream ride.</span>
            </h1>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#768EA6]" />
                <span className="font-medium text-lg">Track EMI schedules instantly</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#768EA6]" />
                <span className="font-medium text-lg">View pre-approved top-up offers</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#768EA6]" />
                <span className="font-medium text-lg">Download NOC and loan statements</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
            <span>© {new Date().getFullYear()} Ritika Financial Corp.</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col relative bg-[#D1DCE2] lg:bg-white h-screen overflow-y-auto">
        
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
          <div></div>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm font-bold hover:text-black transition-colors cursor-pointer">
            <HeadphonesIcon className="w-4 h-4" />
            <span className="hidden sm:inline uppercase tracking-wider">Support</span>
          </div>
        </div>

        {/* Login Container */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 w-full max-w-lg mx-auto mt-16 lg:mt-0">
          
          {/* Mobile Only Logo */}
          <div className="lg:hidden flex flex-col items-center mb-12">
            <span className="font-extrabold text-4xl tracking-tight text-gray-900 leading-none">
              RITIKA
            </span>
            <span className="font-bold text-[10px] text-white uppercase tracking-widest mt-1 bg-[#768EA6] px-2 py-0.5 inline-block">
              Financial Corporation
            </span>
          </div>

          <div className="w-full text-center lg:text-left mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 font-medium">Access your secure customer portal</p>
          </div>

          <div className="w-full bg-white lg:bg-transparent rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:shadow-none p-8 lg:p-0 border border-gray-100 lg:border-none relative">
            <AnimatePresence mode="wait">
              {step === 'MOBILE' ? (
                <motion.form 
                  key="mobile-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSendOtp} 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest">Registered Mobile</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                        className="w-full h-14 rounded-xl pl-12 pr-4 text-lg font-bold border-2 border-gray-200 focus:outline-none focus:border-[#768EA6] bg-[#D1DCE2] focus:bg-white transition-all text-gray-900 shadow-sm"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading || mobile.length < 10}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold uppercase tracking-wider h-14 rounded-lg transition-all shadow-sm flex justify-center items-center disabled:opacity-50 mt-4"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                    ) : (
                      "Send Secure OTP"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.form 
                  key="otp-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleLogin} 
                  className="space-y-6"
                >
                  <div className="bg-[#D1DCE2] p-4 rounded-xl border border-gray-200 flex justify-between items-center mb-2 shadow-sm">
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">OTP sent to</p>
                      <p className="text-sm font-extrabold text-gray-900">+91 {mobile}</p>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setStep('MOBILE')} 
                      className="text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-black transition-colors px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm"
                    >
                      Edit
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest">Enter 6-Digit OTP</label>
                    <div className="flex gap-2 justify-between">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <input
                          key={index}
                          ref={(el) => { inputRefs.current[index] = el; }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={otpArray[index]}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-10 h-12 sm:w-14 sm:h-16 rounded-xl text-center text-2xl font-black border-2 border-gray-200 focus:outline-none focus:border-[#768EA6] bg-[#D1DCE2] focus:bg-white transition-all text-gray-900 shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading || otpArray.join('').length < 6}
                    className="w-full bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider h-14 rounded-lg transition-all shadow-sm flex justify-center items-center disabled:opacity-50 mt-4"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-black/30 border-t-black animate-spin rounded-full" />
                    ) : (
                      "Verify & Login"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center lg:text-left">
              <p className="text-sm font-medium text-gray-500">
                New to Ritika Financial Corp?
              </p>
              <Link to="/purchase-bike" className="inline-flex items-center gap-1 text-black font-extrabold uppercase tracking-wider text-sm mt-2 hover:text-[#768EA6] transition-colors">
                Apply for a loan today
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 lg:mt-auto pt-8 w-full">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <p className="text-xs font-bold uppercase tracking-wider">
                Bank-grade 256-bit encryption
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
