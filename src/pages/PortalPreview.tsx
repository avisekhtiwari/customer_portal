import { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Menu, X, Wallet, Calendar, FileText, MessageSquare, Bell, User, LogOut, CreditCard, Activity, ArrowRight, ShieldCheck, Zap,  } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// CRED-like Neumorphic / Glassmorphic Card
const GlassCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
 whileHover={{ y: -5, scale: 1.01 }}
 className={cn(
  "rounded-3xl",
 "relative overflow-hidden bg-white rounded-3xl",
 "border border-gray-200",
 "shadow-[10px_10px_30px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.02)]",
 "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none",
 className
 )}
 >
 {children}
 </motion.div>
);

const Dashboard = () => {
  const navigate = useNavigate();
 const [user, setUser] = useState<{name: string, initials: string} | null>(null);

 useEffect(() => {
 const data = localStorage.getItem('ritika_user');
 if (data) {
 setUser(JSON.parse(data));
 }
 }, []);

 return (
 <div className="space-y-8 pb-20 md:pb-0">
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 className="flex justify-between items-end"
 >
 <div>
 <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">hello, {user ? user.name.toLowerCase() : 'john'}.</h2>
 <p className="text-gray-500 font-medium">here is your financial summary.</p>
 </div>
 <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">
 {user ? user.initials : 'JD'}
 </div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <GlassCard delay={0.1} className="p-8 md:col-span-2">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gray-100">
              <CreditCard className="w-6 h-6 text-[#FFD700]" />
            </div>
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Total Outstanding</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-green-600 bg-green-400/10 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Secure
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl text-gray-500 font-light">₹</span>
            <h3 className="text-6xl md:text-7xl font-black text-[#FFD700] tracking-tighter">60,800</h3>
          </div>
          <p className="text-gray-500 mt-2 flex items-center gap-2 text-sm">
            <Activity className="w-4 h-4" /> Across 1 active loan
          </p>
        </div>
      </GlassCard>

      <GlassCard delay={0.2} className="p-8 flex flex-col justify-between bg-gradient-to-br from-gray-50 to-gray-100">
        <div>
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">Next EMI Due</p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl text-[#FFD700] font-light">₹</span>
            <h3 className="text-4xl font-bold text-[#FFD700]">3,514</h3>
          </div>
          <p className="text-gray-500 mt-2 text-sm">Due on 15 Oct 2026</p>
        </div>
        
        <button onClick={() => navigate('/portal/emi')} className="mt-8 w-full group rounded-lg relative inline-flex h-14 items-center justify-center overflow-hidden bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider px-8 transition-all shadow-sm">
          Pay Now
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </GlassCard>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GlassCard delay={0.3} className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-[#FFD700]">Recent Transactions</h4>
          <button onClick={() => navigate('/portal/emi')} className="text-sm text-[#FFD700] hover:text-[#FFD700] transition-colors">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { date: "15 Aug 2026", amount: 3514 },
            { date: "15 Jul 2026", amount: 4264 }, 
            { date: "15 Jun 2026", amount: 3514 }
          ].map((txn, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-semibold text-[#FFD700]">EMI Payment</p>
                  <p className="text-xs text-gray-500">{txn.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#FFD700]">-₹{txn.amount.toLocaleString()}</p>
                <p className="text-xs text-green-600">Success</p>
              </div>
            </div>
          ))}
        </div>
 </GlassCard>

 <GlassCard delay={0.4} className="p-8">
 <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
 <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
 <FileText className="w-8 h-8 text-[#FFD700]" />
 </div>
 <h4 className="text-xl font-bold text-[#FFD700]">Download Statements</h4>
 <p className="text-gray-500 text-sm max-w-[250px]">Get your detailed loan statements and NOCs instantly.</p>
 <button onClick={() => navigate('/portal/documents')} className="px-6 py-3 rounded-lg bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider transition-all shadow-sm">
 Access Documents
 </button>
 </div>
 </GlassCard>
 </div>
 </div>
 );
};

const MyLoans = () => {
  const loanDetails = {
    loan_no: "LN-2024-89012",
    status: "Active",
    vehicle_brand: "Honda",
    vehicle_model: "Shine 125",
    chassis_no: "ME4JC842LK809123",
    engine_no: "JC84E-8091234",
    registration_no: "MH-02-AB-1234",
    ex_showroom_price: 82000,
    down_payment: 20000,
    loan_amount: 75000,
    tenure: 24,
    interest_rate: 11.5,
    emi_amount: 3514
  };

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">My Loans</h2>
        <p className="text-gray-500 font-medium">Manage your active and past vehicle loans.</p>
      </motion.div>

      <GlassCard className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-[#FFD700] font-black text-xl">{loanDetails.vehicle_brand[0]}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FFD700]">{loanDetails.vehicle_brand} {loanDetails.vehicle_model}</h3>
              <p className="text-gray-500 text-sm">Loan No: {loanDetails.loan_no}</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-green-700 bg-green-100 border border-green-200">
            {loanDetails.status.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Loan Amount</p>
            <p className="text-black font-semibold">₹ {loanDetails.loan_amount.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Down Payment</p>
            <p className="text-black font-semibold">₹ {loanDetails.down_payment.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Tenure</p>
            <p className="text-black font-semibold">{loanDetails.tenure} Months</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">EMI Amount</p>
            <p className="text-black font-semibold">₹ {loanDetails.emi_amount.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-4 rounded-2xl border border-gray-200">
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Registration No</p>
            <p className="text-[#FFD700] text-sm font-medium">{loanDetails.registration_no}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Chassis No</p>
            <p className="text-[#FFD700] text-sm font-medium">{loanDetails.chassis_no}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Engine No</p>
            <p className="text-[#FFD700] text-sm font-medium">{loanDetails.engine_no}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Repayment Progress (Interest + Principal)</span>
            <span className="text-[#FFD700] font-bold">23%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#FFD700] to-[#055bba] w-[23%]"></div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const EMISchedule = () => {
  const schedule = [
    { month_number: 6, emi_date: "2026-10-15", emi_amount: 3514, principal_payment: 2800, interest_payment: 714, balance: 58000, status: "Pending", late_fine: 0, bounce_charge: 0, over_due_amount: 0 },
    { month_number: 5, emi_date: "2026-09-15", emi_amount: 3514, principal_payment: 2750, interest_payment: 764, balance: 60800, status: "Pending", late_fine: 0, bounce_charge: 0, over_due_amount: 0 },
    { month_number: 4, emi_date: "2026-08-15", emi_amount: 3514, principal_payment: 2700, interest_payment: 814, balance: 63550, status: "Paid", late_fine: 0, bounce_charge: 0, over_due_amount: 0 },
    { month_number: 3, emi_date: "2026-07-15", emi_amount: 3514, principal_payment: 2650, interest_payment: 864, balance: 66250, status: "Paid", late_fine: 250, bounce_charge: 500, over_due_amount: 0 },
    { month_number: 2, emi_date: "2026-06-15", emi_amount: 3514, principal_payment: 2600, interest_payment: 914, balance: 68900, status: "Paid", late_fine: 0, bounce_charge: 0, over_due_amount: 0 },
    { month_number: 1, emi_date: "2026-05-15", emi_amount: 3514, principal_payment: 2550, interest_payment: 964, balance: 71500, status: "Paid", late_fine: 0, bounce_charge: 0, over_due_amount: 0 },
  ];

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">EMI Schedule</h2>
        <p className="text-gray-500 font-medium">Track your upcoming payments and past receipts.</p>
      </motion.div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="p-6 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bold text-[#FFD700]">Loan No: LN-2024-89012</h3>
          <button onClick={() => alert('Redirecting to secure payment gateway...')} className="text-sm rounded-full font-semibold text-white bg-[#FFD700] hover:bg-[#055bba] px-4 py-2 transition-colors">
            Pay Advance EMI
          </button>
        </div>
        <div className="divide-y divide-gray-200">
          {schedule.map((item, i) => (
            <div key={i} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-black font-semibold">Month {item.month_number} - {new Date(item.emi_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric'})}</p>
                  <p className="text-sm text-gray-500">Principal: ₹{item.principal_payment} | Interest: ₹{item.interest_payment}</p>
                  {(item.late_fine > 0 || item.bounce_charge > 0) && (
                    <p className="text-xs text-red-400 mt-1">Late Fine: ₹{item.late_fine} | Bounce: ₹{item.bounce_charge}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div className="text-right">
                  <p className="text-xl font-bold text-[#FFD700]">₹ {(item.emi_amount + item.late_fine + item.bounce_charge).toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Balance: ₹{item.balance.toLocaleString()}</p>
                </div>
                {item.status === "Paid" ? (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-green-700 bg-green-100 border border-green-200 w-24 text-center">
                    PAID
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/20 w-24 text-center">
                    PENDING
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const Documents = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">Documents</h2>
        <p className="text-gray-500 font-medium">Access your loan statements and certificates.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Loan Agreement", desc: "Signed on 15 Aug 2024", icon: FileText },
          { title: "Statement of Account", desc: "Updated till today", icon: Activity },
          { title: "Repayment Schedule", desc: "Full 24-month schedule", icon: Calendar },
          { title: "No Objection Certificate (NOC)", desc: "Available after loan closure", icon: ShieldCheck, Zap,  locked: true },
        ].map((doc, i) => (
          <GlassCard key={i} className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <doc.icon className={`w-6 h-6 ${doc.locked ? 'text-gray-600' : 'text-[#FFD700]'}`} />
              </div>
              <div>
                <h4 className={`font-bold ${doc.locked ? 'text-gray-500' : 'text-[#FFD700]'}`}>{doc.title}</h4>
                <p className="text-sm text-gray-500">{doc.desc}</p>
              </div>
            </div>
            <button disabled={doc.locked} onClick={() => alert(`Downloading ${doc.title}...`)} className={`px-4 py-2 text-sm font-semibold transition-colors ${doc.locked ? 'bg-gray-100 text-gray-600' : 'bg-gray-200 text-[#FFD700] hover:bg-white/20'}`}>
              {doc.locked ? 'Locked' : 'Download'}
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const Queries = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">Support Queries</h2>
          <p className="text-gray-500 font-medium">Raise a ticket or view past interactions.</p>
        </div>
        <button onClick={() => alert('Opening ticket creation form...')} className="px-6 py-2 rounded-lg bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider shadow-sm">New Ticket</button>
      </motion.div>
      <GlassCard className="p-0 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {[
            { id: "TKT-8923", subject: "Change of registered mobile number", status: "RESOLVED", date: "02 Sep 2026" },
            { id: "TKT-8451", subject: "Query regarding pre-closure charges", status: "RESOLVED", date: "14 Jul 2026" },
          ].map((ticket, i) => (
            <div key={i} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[#FFD700] text-sm font-bold">{ticket.id}</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider text-green-700 bg-green-100 border border-green-200">{ticket.status}</span>
                </div>
                <h4 className="text-[#FFD700] font-medium">{ticket.subject}</h4>
              </div>
              <div className="mt-4 md:mt-0 text-gray-500 text-sm">{ticket.date}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">Notifications</h2>
        <p className="text-gray-500 font-medium">Recent alerts and updates on your account.</p>
      </motion.div>
      <GlassCard className="p-0 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {[
            { title: "Upcoming EMI Reminder", desc: "Your next EMI of ₹4,250 is due in 5 days. Ensure sufficient balance.", time: "1 day ago", unread: true, icon: Bell },
            { title: "EMI Payment Successful", desc: "Your EMI of ₹4,250 for Aug 2026 was received successfully.", time: "2 weeks ago", unread: false, icon: Zap },
          ].map((notif, i) => (
            <div key={i} className={`p-6 flex gap-4 ${notif.unread ? 'bg-gray-100' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                <notif.icon className="w-5 h-5 text-[#FFD700]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className={`font-medium ${notif.unread ? 'text-[#FFD700]' : 'text-gray-300'}`}>{notif.title}</h4>
                  <span className="text-xs text-gray-500">{notif.time}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{notif.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const Profile = () => {
  const [user, setUser] = useState<{name: string, identifier: string} | null>(null);
  
  // Real DB schema matched fields
  const mockCustomer = {
    customerCode: "CUST-849201",
    status: "Active",
    isDraft: 0,
    fathernamespousename: "Rajesh Kumar",
    gender: "male",
    maritalstatus: "single",
    dateofbirth: "1995-08-15",
    currentaddress: "123, Green Park Residency, Andheri West, Mumbai, Maharashtra - 400053",
    permanentaddress: "123, Green Park Residency, Andheri West, Mumbai, Maharashtra - 400053",
    voterid: "VOT1234567",
    panno: "ABCDE1234F",
    aadhaar: "1234 5678 9012",
    occupationType: "Salaried",
    monthlyIncome: 45000,
    companyName: "Tech Solutions Pvt Ltd",
    designation: "Software Engineer",
  };

  useEffect(() => {
    const data = localStorage.getItem('ritika_user');
    if (data) setUser(JSON.parse(data));
  }, []);

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">My Profile</h2>
        <p className="text-gray-500 font-medium">View your personal and KYC details.</p>
      </motion.div>
      <GlassCard className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-200 pb-8 mb-8 text-center md:text-left">
          <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-3xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            {user?.name ? user.name.substring(0, 2).toUpperCase() : 'JD'}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#FFD700] capitalize">{user?.name || 'John Doe'}</h3>
            <p className="text-gray-500 mt-1">Customer Code: {mockCustomer.customerCode}</p>
            <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold text-green-700 bg-green-100 border border-green-200">KYC VERIFIED</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-gray-200 pb-8">
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Mobile Number (Phone)</p>
            <p className="text-[#FFD700] font-medium">{user?.identifier || '+91 9876543210'}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Email Address</p>
            <p className="text-[#FFD700] font-medium">{user?.name ? `${user.name.toLowerCase()}@example.com` : 'john.doe@example.com'}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Current Address</p>
            <p className="text-[#FFD700] font-medium">{mockCustomer.currentaddress}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Aadhaar</p>
            <p className="text-[#FFD700] text-sm font-medium">XXXX XXXX {mockCustomer.aadhaar.slice(-4)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">PAN No</p>
            <p className="text-[#FFD700] text-sm font-medium">{mockCustomer.panno}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Occupation</p>
            <p className="text-[#FFD700] text-sm font-medium">{mockCustomer.occupationType} - ₹{mockCustomer.monthlyIncome.toLocaleString()}</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const SettingsPage = () => {
  const [email, setEmail] = useState(true);
  const [whatsapp, setWhatsapp] = useState(true);

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">Settings</h2>
        <p className="text-gray-600 font-medium">Manage your portal preferences.</p>
      </motion.div>
      <div className="grid gap-6 max-w-3xl">
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#FFD700]">Email Notifications</h4>
            <p className="text-sm text-gray-500">Receive alerts for upcoming EMIs and offers.</p>
          </div>
          <div onClick={() => setEmail(!email)} className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${email ? 'bg-[#FFD700]' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${email ? 'right-1' : 'left-1'}`}></div>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#FFD700]">WhatsApp Updates</h4>
            <p className="text-sm text-gray-500">Get payment receipts directly on WhatsApp.</p>
          </div>
          <div onClick={() => setWhatsapp(!whatsapp)} className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${whatsapp ? 'bg-[#FFD700]' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${whatsapp ? 'right-1' : 'left-1'}`}></div>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#FFD700]">Change MPIN / Password</h4>
            <p className="text-sm text-gray-500">Update your security credentials.</p>
          </div>
          <button onClick={() => alert('Sending reset instructions to your registered email...')} className="px-4 py-2 rounded-full bg-gray-200 text-black font-semibold text-sm hover:bg-gray-300 transition-colors">Update</button>
        </GlassCard>
      </div>
    </div>
  );
};


const Offers = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">Pre-approved Offers</h2>
      <p className="text-gray-600 font-medium">Exclusive deals handpicked for you based on your repayment history.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 border border-[#FFD700]/20 bg-gradient-to-br from-[#FFD700]/5 to-transparent">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-[#FFD700] text-xl">Upgrade Your Ride</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">PRE-APPROVED</span>
          </div>
          <p className="text-gray-600 mb-6">Get up to ₹1,20,000 for a new two-wheeler with zero processing fee.</p>
          <button onClick={() => alert('Offer claimed successfully! Our representative will contact you shortly.')} className="px-6 py-2 bg-[#FFD700] text-black rounded-lg font-bold uppercase tracking-wider hover:bg-[#F2C900] transition-all shadow-sm w-full">
            Claim Offer
          </button>
        </GlassCard>
        
        <GlassCard className="p-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-[#FFD700] text-xl">Top-up Loan</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">ELIGIBLE</span>
          </div>
          <p className="text-gray-600 mb-6">Need quick cash? Avail a top-up loan of ₹25,000 against your existing active loan.</p>
          <button onClick={() => alert('Top-up loan application started!')} className="px-6 py-2 bg-[#FFD700] text-black rounded-lg font-bold uppercase tracking-wider hover:bg-[#F2C900] transition-all shadow-sm w-full">
            Apply Now
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

const ApplyLoan = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 pb-20 md:pb-0 flex flex-col items-center justify-center text-center py-10 md:py-12">
      <div className="w-24 h-24 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-4">
        <CreditCard className="w-10 h-10 text-[#FFD700]" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-[#FFD700] mb-1">Apply for a New Loan</h2>
      <p className="text-gray-600 font-medium max-w-md mx-auto">You are just a few clicks away from financing your next dream vehicle. Let's get started.</p>
      <button onClick={() => navigate('/finance')} className="px-8 py-3 bg-[#FFD700] text-black rounded-lg font-bold uppercase tracking-wider hover:bg-[#F2C900] transition-all shadow-sm mt-4">
        Start Application
      </button>
    </div>
  );
};

export default function PortalPreview() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const menu = [
    { name: 'Dashboard', path: '/portal/dashboard', icon: LayoutDashboard },
    { name: 'My Loans', path: '/portal/loans', icon: Wallet },
    { name: 'EMI Schedule', path: '/portal/emi', icon: Calendar },
    { name: 'Apply New Loan', path: '/portal/apply', icon: CreditCard },
    { name: 'Exclusive Offers', path: '/portal/offers', icon: Zap },
    { name: 'Documents', path: '/portal/documents', icon: FileText },
    { name: 'Queries', path: '/portal/queries', icon: MessageSquare },
    { name: 'Notifications', path: '/portal/notifications', icon: Bell },
    ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-[#FFD700] selection:text-white flex relative overflow-hidden">
      
      

      
      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-[300px] bg-white border-r border-gray-200 flex flex-col fixed h-screen z-50 shadow-[5px_0_15px_rgba(0,0,0,0.05)] transition-transform duration-300",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        
        {/* Header */}
        <div className="p-4 flex items-center gap-4 border-b border-gray-100 bg-white">
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 text-gray-800 hover:text-black">
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <div className="flex flex-col items-start ml-2">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
              RITIKA
            </span>
            <span className="font-bold text-[9px] md:text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 hidden md:inline-block w-max">
              Financial Corporation
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400">
          <nav className="flex flex-col bg-white">
            {menu.map((item) => {
              const isActive = location.pathname.includes(item.path) || (item.path === '/portal/dashboard' && location.pathname === '/portal');
              return (
                <div key={item.name} className="border-b border-gray-100">
                  <Link
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <item.icon className={cn("w-5 h-5 relative z-10 transition-colors", isActive ? "text-[#FFD700]" : "text-gray-800 group-hover:text-black")} strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      <span className={cn("text-[13px] uppercase tracking-wider transition-colors", isActive ? "font-bold text-gray-900" : "font-normal text-gray-700 group-hover:text-gray-900")}>
                        {item.name}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
        
        <div className="bg-gray-50 border-t border-gray-100 pb-4">
          <div className="border-b border-gray-100">
            <Link to="/portal/profile" onClick={() => setIsSidebarOpen(false)} className="w-full flex items-center p-4 hover:bg-gray-100 transition-colors group">
              <div className="relative flex items-center justify-center w-6 h-6 mr-4">
                <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                <User className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-bold uppercase tracking-wider text-gray-700">Profile</span>
            </Link>
          </div>
          <div className="border-b border-gray-100">
            <Link to="/" onClick={() => localStorage.removeItem('ritika_user')} className="w-full flex items-center p-4 hover:bg-red-50 transition-colors group">
              <div className="relative flex items-center justify-center w-6 h-6 mr-4">
                <div className="absolute top-1 -right-1 bg-red-400 rounded-sm w-3 h-3 z-0 opacity-80"></div>
                <LogOut className="w-5 h-5 relative z-10 text-red-600" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-bold uppercase tracking-wider text-red-600">Logout</span>
            </Link>
          </div>
        </div>

        {/* Yellow Right Border mimicking scrollbar track style */}
        <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#FFD700] pointer-events-none z-20"></div>
      </aside>

      
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="p-1 -ml-1 text-gray-800 hover:text-black">
            <Menu className="w-7 h-7" />
          </button>
          <Link to="/" className="w-8 h-8 rounded-full overflow-hidden shadow-sm">
            <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Bell className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>


      {/* Main Content */}
      <main id="portal-scroll-container" className="flex-1 md:ml-[300px] p-4 pt-20 pb-28 md:pb-12 md:p-12 relative z-0 h-screen overflow-y-auto overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loans" element={<MyLoans />} />
              <Route path="/emi" element={<EMISchedule />} />
              <Route path="/apply" element={<ApplyLoan />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/queries" element={<Queries />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>

      {/* Premium Attached Bottom Navigation Bar (Mobile Only) - Never Hides */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white rounded-t-3xl border-t-2 border-[#FFD700] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-6 pt-3 pb-6 flex justify-between items-center relative">
          {[
            { name: 'Home', path: '/portal/dashboard', icon: LayoutDashboard },
            { name: 'Loans', path: '/portal/loans', icon: Wallet },
            { name: 'EMI', path: '/portal/emi', icon: Calendar },
            { name: 'Logout', path: '/', icon: LogOut, isLogout: true }
          ].map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/portal/dashboard' && link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => link.isLogout && localStorage.removeItem('ritika_user')}
                className="relative z-10 flex flex-col items-center justify-center gap-1 w-14 group"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300",
                    isActive ? "bg-[#FFD700] text-black shadow-md scale-110" : "bg-transparent text-gray-400 group-hover:text-gray-900",
                    link.isLogout && "group-hover:text-red-500"
                  )}
                >
                  <link.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn(
                  "text-[9px] font-bold uppercase tracking-wider transition-colors text-center w-full truncate", 
                  isActive ? "text-[#FFD700]" : "text-gray-400",
                  link.isLogout && "group-hover:text-red-500"
                )}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
