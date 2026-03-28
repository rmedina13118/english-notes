-- Create vocabulary table for English notes
CREATE TABLE IF NOT EXISTS vocabulary (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  english TEXT NOT NULL,
  spanish TEXT NOT NULL,
  notes TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE vocabulary ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required for this simple app)
CREATE POLICY "Allow public read" ON vocabulary FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON vocabulary FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON vocabulary FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON vocabulary FOR DELETE USING (true);

-- Insert initial vocabulary data
INSERT INTO vocabulary (english, spanish, notes, category) VALUES
('Among', 'Entre un grupo', 'Used for groups of 3 or more', 'Prepositions'),
('Between', 'Entre objetos', 'Used for 2 items', 'Prepositions'),
('Self-control', 'Autocontrol', NULL, 'Personal Development'),
('Be yourself', 'Se tu mismo', 'Singular form', 'Expressions'),
('Be yourselves', 'Sean ustedes mismos', 'Plural form', 'Expressions'),
('Invest', 'Invertir', NULL, 'Business'),
('Sorry to hear that', 'Lamento oir eso', 'Expression of sympathy', 'Expressions'),
('It could be', 'Podría ser', 'Possibility', 'Expressions'),
('Hunger', 'Hambre', 'Noun', 'Basic Vocabulary'),
('Hungry', 'Hambriento', 'Adjective', 'Basic Vocabulary'),
('Raise the hand', 'Levantar la mano', NULL, 'Actions'),
('Deduction', 'Reducir de un total', NULL, 'Business'),
('Discount', 'Pagar menos', NULL, 'Business'),
('Don''t take it for granted', 'No lo des por sentado', 'Important expression', 'Expressions'),
('Common', 'Común', NULL, 'Adjectives'),
('Belief', 'Creencia', NULL, 'Abstract'),
('Lump', 'Hinchazón', NULL, 'Health'),
('What should I do?', '¿Qué debería hacer?', 'Asking for advice', 'Expressions'),
('Keep your word', 'Mantén tu palabra', NULL, 'Expressions'),
('Most of the times', 'La mayoría de veces', NULL, 'Frequency'),
('Take offense', 'Ofendido', NULL, 'Emotions'),
('A few', 'Algunos', 'Countable nouns', 'Quantifiers'),
('A little', 'Un poco', 'Uncountable nouns', 'Quantifiers'),
('Laugh', 'Burlar/Reír', NULL, 'Actions'),
('Some of them', 'Algunas de ellas', NULL, 'Quantifiers'),
('A while ago', 'Hace algún tiempo', NULL, 'Time'),
('From the heart', 'De corazón', 'Sincere', 'Expressions'),
('By heart', 'De memoria', 'Memorized', 'Expressions'),
('Carryover', 'Trabajo pendiente', 'In software: incomplete work from Sprint', 'Tech'),
('The most', 'Lo más', 'Superlative', 'Grammar'),
('Grimace', 'Gesto', 'Facial expression', 'Body Language'),
('A must', 'Una obligación', NULL, 'Expressions'),
('Yet', 'Todavía', NULL, 'Time'),
('No shame', 'Sin vergüenza (sin miedo)', 'Positive connotation', 'Expressions'),
('Shameless', 'Sinvergüenza', 'Offensive', 'Adjectives'),
('We deserve great things in life', 'Merecemos grandes cosas en la vida', NULL, 'Expressions'),
('Tops', 'Lo más alto, por mucho', NULL, 'Expressions'),
('Staff', 'Personal', 'People who work', 'Business'),
('Stuff', 'Cosas/Relleno', NULL, 'Basic Vocabulary'),
('Floor tiles', 'Piso cerámico', NULL, 'Home'),
('Tiles', 'Tejas', NULL, 'Home'),
('As we go / On the go', 'Sobre la marcha', NULL, 'Expressions'),
('Times', 'Por (multiplicación)', '2 x 3 = two times three', 'Math'),
('Nowadays', 'Hoy en día', NULL, 'Time'),
('Cybercrime', 'Ciberdelincuencia', NULL, 'Tech'),
('Horseback riding', 'Cabalgata', NULL, 'Activities'),
('Slouch', 'Encorvar', 'Posture', 'Body Language'),
('I work for', 'Trabajo para', 'Company/person', 'Work'),
('I work on', 'Trabajo en', 'Project/task', 'Work'),
('At', 'En (lugar, número)', NULL, 'Prepositions'),
('Meanwhile / Meantime', 'Mientras tanto', NULL, 'Time'),
('Must go on', 'Debe hacerse/continuar', NULL, 'Expressions'),
('Blink', 'Parpadear', 'Both eyes', 'Body Language'),
('Wink', 'Guiñar', 'One eye', 'Body Language'),
('Make up your mind', 'Decide', NULL, 'Expressions'),
('Narrow it down', 'Reducirlo', 'To limit options', 'Expressions'),
('Narrow', 'Angosto', NULL, 'Adjectives'),
('Scenarios', 'Escenarios', NULL, 'Tech'),
('In our prime', 'En nuestro mejor momento', NULL, 'Expressions'),
('Accuracy', 'Precisión', NULL, 'Abstract'),
('Awareness', 'Conciencia', NULL, 'Abstract'),
('Humble', 'Humilde', NULL, 'Adjectives'),
('Role models', 'Modelos a seguir', NULL, 'Personal Development'),
('It reminds me of', 'Me hace recordar', NULL, 'Expressions'),
('Blueprints', 'Planos', NULL, 'Tech'),
('It depends on you', 'Depende de ti', NULL, 'Expressions');
