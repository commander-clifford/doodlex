import { TopStories } from './top-stories';
import { Results } from './results';
import { Egg } from './egg';

import { SearchSuggestions } from './suggestions';
import { Abstract } from './abstract';
import { KnowledgePanel } from './knowledge-panel';

export class SearchResult {

  name: string;
  coorDoodleId: number;
  queries: string[];
  category: string;
  egg: object;
  topStories: TopStories[];
  results: Results[];
  searchSuggestions: SearchSuggestions[];
  abstract: Abstract[];
  knowledgePanel: KnowledgePanel;
  funbox: object;
  scibox: object;

}
