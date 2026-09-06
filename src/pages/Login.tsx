import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Lock, User, KeyRound } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'MOBILE' | 'OTP'>('MOBILE');
  const [isLoading, setIsLoading] = useState(false);

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
    if (otp.length < 4) return;
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
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        
        <Link to="/" className="text-[#04407E]/60 hover:text-[#04407E] flex items-center gap-2 mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Website
        </Link>

        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-3xl pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#04407E] mx-auto flex items-center justify-center mb-6 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500">Sign in to your customer portal</p>
          </div>

          {step === 'MOBILE' ? (
            <form onSubmit={handleSendOtp} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    className="w-full rounded-full pl-12 pr-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-gray-50/50"
                    placeholder="Enter your 10-digit mobile number"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading || mobile.length < 10}
                className="w-full rounded-full bg-accent hover:bg-accent/90 text-white py-4 font-bold transition-all disabled:opacity-70 flex justify-center items-center shadow-lg shadow-accent/20"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                ) : (
                  "Send OTP"
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6 relative z-10">
              <div className="text-sm text-center text-gray-600 mb-4">
                OTP sent to +91 {mobile} <br/>
                <button type="button" onClick={() => setStep('MOBILE')} className="text-accent font-medium hover:underline mt-1">Change Number</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <input 
                    required
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    className="w-full rounded-full pl-12 pr-4 py-3 text-center tracking-widest text-lg font-bold border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-gray-50/50"
                    placeholder="• • • • • •"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading || otp.length < 4}
                className="w-full rounded-full bg-accent hover:bg-accent/90 text-white py-4 font-bold transition-all disabled:opacity-70 flex justify-center items-center shadow-lg shadow-accent/20"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                ) : (
                  "Verify & Login"
                )}
              </button>
            </form>
          )}

          <div className="mt-8 text-center relative z-10">
            <p className="text-sm text-gray-500">
              Don't have an account? <br/>
              <Link to="/finance" className="text-accent font-semibold hover:underline mt-1 inline-block">Apply for finance today</Link>
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[#04407E]/40 text-xs max-w-sm">
          Protected by industry standard encryption. Your data is strictly confidential.
        </div>
      </div>
    </div>
  );
}
