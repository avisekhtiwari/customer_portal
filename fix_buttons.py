import re

with open('src/pages/PortalPreview.tsx', 'r') as f:
    content = f.read()

# Add useNavigate to Dashboard
if 'const navigate = useNavigate();' not in content.split('const Dashboard = () => {')[1][:200]:
    content = content.replace('const Dashboard = () => {\n', 'const Dashboard = () => {\n  const navigate = useNavigate();\n')

# Make Dashboard buttons work
content = content.replace(
    '<button className="mt-8 w-full group',
    '<button onClick={() => navigate(\'/portal/emi\')} className="mt-8 w-full group'
)
content = content.replace(
    '<button className="text-sm text-[#04407E]',
    '<button onClick={() => navigate(\'/portal/emi\')} className="text-sm text-[#04407E]'
)
content = content.replace(
    '<button className="px-6 py-3 rounded-full bg-gray-200 text-[#04407E]',
    '<button onClick={() => navigate(\'/portal/documents\')} className="px-6 py-3 rounded-full bg-gray-200 text-[#04407E]'
)

# EMISchedule Pay button
content = content.replace(
    '<button className="text-sm rounded-full font-semibold text-white bg-[#04407E]',
    '<button onClick={() => alert(\'Redirecting to secure payment gateway...\')} className="text-sm rounded-full font-semibold text-white bg-[#04407E]'
)

# Documents Download button
content = content.replace(
    '<button disabled={doc.locked} className=',
    '<button disabled={doc.locked} onClick={() => alert(`Downloading ${doc.title}...`)} className='
)

# Queries New Ticket
content = content.replace(
    '<button className="px-6 py-2 rounded-full bg-[#04407E]',
    '<button onClick={() => alert(\'Opening ticket creation form...\')} className="px-6 py-2 rounded-full bg-[#04407E]'
)

# Offers Claim/Apply
content = content.replace(
    '<button className="px-6 py-2 bg-[#04407E]',
    '<button onClick={() => alert(\'Offer claimed successfully! Our representative will contact you shortly.\')} className="px-6 py-2 bg-[#04407E]'
)
content = content.replace(
    '<button className="px-6 py-2 border-2',
    '<button onClick={() => alert(\'Top-up loan application started!\')} className="px-6 py-2 border-2'
)

# Settings toggles
# For Settings, we can replace the static toggles with interactive state.
settings_component_old = """const SettingsPage = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#04407E] mb-1">Settings</h2>
        <p className="text-gray-600 font-medium">Manage your portal preferences.</p>
      </motion.div>
      <div className="grid gap-6 max-w-3xl">
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#04407E]">Email Notifications</h4>
            <p className="text-sm text-gray-500">Receive alerts for upcoming EMIs and offers.</p>
          </div>
          <div className="w-12 h-6 bg-[#04407E] rounded-full relative cursor-pointer shadow-[0_0_15px_rgba(4,64,126,0.4)]">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#04407E]">WhatsApp Updates</h4>
            <p className="text-sm text-gray-500">Get payment receipts directly on WhatsApp.</p>
          </div>
          <div className="w-12 h-6 bg-[#04407E] rounded-full relative cursor-pointer shadow-[0_0_15px_rgba(4,64,126,0.4)]">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#04407E]">Change MPIN / Password</h4>
            <p className="text-sm text-gray-500">Update your security credentials.</p>
          </div>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-[#04407E] font-semibold text-sm hover:bg-gray-300 transition-colors">Update</button>
        </GlassCard>
      </div>
    </div>
  );
};"""

settings_component_new = """const SettingsPage = () => {
  const [email, setEmail] = useState(true);
  const [whatsapp, setWhatsapp] = useState(true);

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#04407E] mb-1">Settings</h2>
        <p className="text-gray-600 font-medium">Manage your portal preferences.</p>
      </motion.div>
      <div className="grid gap-6 max-w-3xl">
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#04407E]">Email Notifications</h4>
            <p className="text-sm text-gray-500">Receive alerts for upcoming EMIs and offers.</p>
          </div>
          <div onClick={() => setEmail(!email)} className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${email ? 'bg-[#04407E]' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${email ? 'right-1' : 'left-1'}`}></div>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#04407E]">WhatsApp Updates</h4>
            <p className="text-sm text-gray-500">Get payment receipts directly on WhatsApp.</p>
          </div>
          <div onClick={() => setWhatsapp(!whatsapp)} className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${whatsapp ? 'bg-[#04407E]' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${whatsapp ? 'right-1' : 'left-1'}`}></div>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#04407E]">Change MPIN / Password</h4>
            <p className="text-sm text-gray-500">Update your security credentials.</p>
          </div>
          <button onClick={() => alert('Sending reset instructions to your registered email...')} className="px-4 py-2 rounded-full bg-gray-200 text-[#04407E] font-semibold text-sm hover:bg-gray-300 transition-colors">Update</button>
        </GlassCard>
      </div>
    </div>
  );
};"""

if 'const SettingsPage = () => {' in content:
    # Need a more robust replace for settings since it spans multiple lines.
    # The python replace might fail if the whitespace doesn't match perfectly.
    # Let's use regex.
    content = re.sub(r'const SettingsPage = \(\) => \{.*?(?=export default function PortalPreview)', settings_component_new + '\n\n', content, flags=re.DOTALL)


with open('src/pages/PortalPreview.tsx', 'w') as f:
    f.write(content)
print("Buttons fixed.")
